// Comprueba que el contenido clínico de src/data coincide con spec.md, que es su fuente de verdad.
import assert from 'assert';
import fs from 'fs';
import { ADVISOR_GREETING, ADVISOR_SAMPLE_QUESTIONS, NO_KEY_REPLY, SYSTEM_INSTRUCTION } from '../src/data/clinicalAdvisor';
import { DISCLAIMERS, GUIDE, HOME, POST_SESSION_TIP, QUICK_START_ROUTINE, ROUTINE_PRESETS, SIMULATOR } from '../src/data/clinicalContent';
import { EXERCISE_ANIMATIONS } from '../src/data/exerciseAnimations';
import { EXERCISES_DATABASE, PHASE_CONFIG } from '../src/data/exercisesData';

const spec = fs.readFileSync(new URL('../spec.md', import.meta.url), 'utf8').replace(/\r\n/g, '\n');

// Bloques bajo cada título de un nivel, hasta el siguiente título de ese nivel o superior
const blocks = (text: string, level: number) => {
  const prefix = '#'.repeat(level) + ' ';
  const higher = new RegExp(`^#{1,${level}} `);
  const found: { title: string; body: string }[] = [];
  let inFence = false;
  for (const line of text.split('\n')) {
    if (line.startsWith('```')) inFence = !inFence;
    if (!inFence && higher.test(line)) {
      if (line.startsWith(prefix)) found.push({ title: line.slice(prefix.length).trim(), body: '' });
      else found.push({ title: '', body: '' });
    } else if (found.length) {
      found[found.length - 1].body += line + '\n';
    }
  }
  return found.filter((block) => block.title);
};

const section = (text: string, level: number, title: string) => {
  const block = blocks(text, level).find((candidate) => candidate.title === title);
  assert(block, `Falta la sección "${title}"`);
  return block.body;
};

const listItems = (text: string) =>
  text.split('\n').filter((line) => /^(- |\d+\. )/.test(line)).map((line) => line.replace(/^(- |\d+\. )/, ''));

const paragraphs = (text: string) =>
  text.split('\n\n').map((part) => part.trim()).filter((part) => part && !/^(- |\d+\. |> |\||#)/.test(part));

const labelled = (item: string) => {
  const match = item.match(/^\*\*(.+?):\*\*\s*(.*)$/);
  assert(match, `Se esperaba "**Etiqueta:** texto" en: ${item}`);
  return { title: match[1], text: match[2] };
};

const labelledItems = (text: string) => listItems(text).map(labelled);

const optionalField = (text: string, label: string) =>
  listItems(text).filter((item) => item.startsWith(`**${label}:**`)).map((item) => labelled(item).text)[0];

const field = (text: string, label: string) => {
  const value = optionalField(text, label);
  assert(value !== undefined, `Falta el campo "${label}"`);
  return value;
};

const codes = (text: string) => [...text.matchAll(/`([^`]+)`/g)].map((match) => match[1]);
const fenced = (text: string) => text.match(/```text\n([\s\S]*?)\n```/)?.[1];
const number = (text: string) => Number(text.replace(',', '.').match(/-?\d+(?:[.,]\d+)?/)?.[0].replace(',', '.'));
const tableRows = (text: string) =>
  text.split('\n').filter((line) => line.startsWith('|')).slice(2).map((line) => line.split('|').slice(1, -1).map((cell) => cell.trim()));

const results: string[] = [];
const failures: string[] = [];

const compare = (name: string, read: () => { fromSpec: unknown; fromCode: unknown }) => {
  try {
    const { fromSpec, fromCode } = read();
    assert.deepStrictEqual(fromSpec, fromCode);
    results.push(name);
  } catch (error: any) {
    failures.push(`\n✗ ${name}\n${error.message}`);
  }
};

const PHASE_KEYS: Record<number, string> = { 1: 'fase1_descompresion', 2: 'fase2_estabilizacion', 3: 'fase3_funcional' };

const phaseBlocks = blocks(section(spec, 2, 'Fases del protocolo'), 3);
compare('Fases', () => ({
  fromSpec: Object.fromEntries(phaseBlocks.map(({ title, body }) => [codes(title)[0], {
    title: field(body, 'Título'),
    shortTitle: field(body, 'Título corto'),
    description: field(body, 'Descripción'),
    badge: field(body, 'Etiqueta'),
    phaseNum: number(title),
  }])),
  fromCode: Object.fromEntries(Object.entries(PHASE_CONFIG).map(([key, { color, ...phase }]) => [key, phase])),
}));

const exerciseBlocks = blocks(section(spec, 2, 'Ejercicios'), 3);
const sublist = (body: string, title: string) => listItems(section(body, 4, title));

compare('Ejercicios', () => ({
  fromSpec: exerciseBlocks.map(({ title, body }) => {
    const details = body.split('\n#### ')[0];
    const phaseNumber = number(field(details, 'Fase'));
    const duration = optionalField(details, 'Duración');
    const hold = optionalField(details, 'Retención');
    return {
      id: codes(title)[0],
      name: field(details, 'Nombre'),
      subtitle: field(details, 'Subtítulo'),
      phase: PHASE_KEYS[phaseNumber],
      phaseNumber,
      targetMuscles: field(details, 'Músculos y estructuras').split('; '),
      biomechanicalObjective: field(details, 'Objetivo biomecánico'),
      whyItRelieves: field(details, 'Por qué alivia'),
      equipment: codes(field(details, 'Material')),
      sets: number(field(details, 'Series')),
      repsOrTime: field(details, 'Repeticiones o tiempo'),
      ...(duration ? { durationSeconds: number(duration) } : {}),
      ...(hold ? { holdSeconds: number(hold) } : {}),
      instructions: sublist(body, 'Instrucciones'),
      techniqueCues: sublist(body, 'Claves de técnica'),
      alarmFlags: sublist(body, 'Señales de alarma'),
      diagramType: codes(field(details, 'Diagrama'))[0],
      difficulty: field(details, 'Dificultad'),
    };
  }),
  fromCode: EXERCISES_DATABASE.map((exercise) => ({ ...exercise })),
}));

compare('Textos de animación', () => ({
  fromSpec: exerciseBlocks.map(({ body }) => ({
    errors: labelledItems(section(body, 4, 'Errores frecuentes')),
    ranges: labelledItems(section(body, 4, 'Rangos correctos')),
    animation: sublist(body, 'Animación').map((item) => labelled(item).text),
  })),
  fromCode: EXERCISES_DATABASE.map(({ diagramType }) => {
    const animation = EXERCISE_ANIMATIONS[diagramType]!;
    return {
      errors: animation.errors.map(({ label, why }) => ({ title: label, text: why })),
      ranges: animation.readouts.map(({ label, min, max, unit }) => ({ title: label, text: `${min} a ${max}${unit}` })),
      animation: [animation.muscleLabel, ...animation.phases.map(({ label }) => label)],
    };
  }),
}));

const routines = section(spec, 2, 'Rutinas predefinidas');
compare('Rutinas', () => ({
  fromSpec: {
    quickStart: {
      duration: field(section(routines, 3, 'Rutina de inicio rápido'), 'Duración'),
      exerciseIds: codes(section(routines, 3, 'Rutina de inicio rápido')),
    },
    presets: blocks(routines, 3).slice(1, -1).map(({ title, body }) => ({
      title,
      duration: field(body, 'Duración'),
      description: paragraphs(body)[0],
      exerciseIds: codes(body),
    })),
    tip: paragraphs(section(routines, 3, 'Recomendación al terminar una sesión'))[0],
  },
  fromCode: { quickStart: QUICK_START_ROUTINE, presets: ROUTINE_PRESETS, tip: POST_SESSION_TIP },
}));

compare('Referencias de rutinas', () => {
  const known = new Set(EXERCISES_DATABASE.map(({ id }) => id));
  return { fromSpec: codes(routines).filter((id) => !known.has(id)), fromCode: [] };
});

const guide = section(spec, 2, 'Guía clínica');
const activity = section(guide, 3, 'Actividad física y deporte');
const traction = paragraphs(section(guide, 3, 'Por qué alivia la tracción'));
compare('Guía clínica', () => ({
  fromSpec: {
    intro: paragraphs(section(guide, 3, 'Introducción'))[0],
    avoid: labelledItems(section(guide, 3, 'Qué evitar durante la rehabilitación')),
    tractionIntro: traction[0],
    tractionSteps: labelledItems(section(guide, 3, 'Por qué alivia la tracción')),
    tractionLongTerm: traction[1],
    posture: labelledItems(section(guide, 3, 'Higiene postural')),
    activityIntro: paragraphs(activity.split('\n#### ')[0])[0],
    activityGroups: blocks(activity, 4).slice(0, 3).map(({ title, body }) => ({ title, activities: labelledItems(body) })),
    activityWarnings: listItems(section(activity, 4, 'Cuándo parar')),
    faqs: blocks(section(guide, 3, 'Preguntas frecuentes'), 4).map(({ title, body }) => ({ q: title, a: paragraphs(body)[0] })),
  },
  fromCode: {
    ...GUIDE,
    activityGroups: GUIDE.activityGroups.map(({ title, activities }) => ({ title, activities })),
  },
}));

const simulator = section(spec, 2, 'Simulador biomecánico');
const formula = section(simulator, 3, 'Fórmula del IFS estimado');
compare('Simulador', () => {
  const effect = (row: string[]) => ({
    perDegree: Math.abs(number(row[1])),
    ...(row[2] === 'Sin límite' ? {} : { limit: number(row[2]) }),
  });
  const effectRows = Object.fromEntries(tableRows(formula).map((row) => [row[0], effect(row)]));
  const references = section(simulator, 3, 'Referencias');
  const texts = section(simulator, 3, 'Textos explicativos');
  const angle = (cell: string, sign: Record<string, number>) => {
    const key = Object.keys(sign).find((name) => cell.includes(name))!;
    return number(cell) * sign[key];
  };
  const presetKeys = ['traction', 'walk_impingement', 'crossed_legs'];
  return {
    fromSpec: {
      baselineMm: number(formula.match(/Valor base: ([\d,]+) mm/)![1]),
      minimumMm: number(formula.match(/mínimo de ([\d,]+) mm/)![1]),
      effects: {
        extension: effectRows['Extensión'],
        flexion: effectRows['Flexión'],
        adduction: effectRows['Aducción'],
        abduction: effectRows['Abducción'],
        externalRotation: effectRows['Rotación externa'],
        internalRotation: effectRows['Rotación interna'],
      },
      maxTractionMm: number(formula.match(/hasta \+([\d,]+) mm/)![1]),
      statuses: tableRows(section(simulator, 3, 'Estados según el IFS estimado')).map(([range, name, description]) => ({
        below: range.startsWith('≥') ? Infinity : number(range.slice(range.indexOf('<'))),
        name,
        description,
      })),
      normalRange: field(references, 'Normal'),
      pathologicalBelowMm: number(field(references, 'Patológico')),
      therapeuticGoal: listItems(references).find((item) => item.startsWith('**Objetivo terapéutico:**'))!.replace('**Objetivo terapéutico:** ', ''),
      presets: Object.fromEntries(tableRows(section(simulator, 3, 'Posturas predefinidas')).map(([label, hip, frontal, rotation, band], index) => [presetKeys[index], {
        label,
        state: {
          hipAngle: angle(hip, { flexión: 1, extensión: -1 }),
          frontalAngle: angle(frontal, { abducción: 1, aducción: -1 }),
          rotationAngle: angle(rotation, { interna: 1, externa: -1 }),
          bandTractionIntensity: band === 'Sin goma' ? 0 : number(band),
          bandTractionActive: band !== 'Sin goma',
        },
      }])),
      modelExplanation: field(texts, 'Modelo'),
      modelLimits: field(texts, 'Límites'),
      tractionExplanation: field(texts, 'Goma'),
    },
    fromCode: {
      ...SIMULATOR,
      statuses: SIMULATOR.statuses.map(({ below, name, description }) => ({ below, name, description })),
    },
  };
});

const home = section(spec, 2, 'Portada');
compare('Portada', () => ({
  fromSpec: {
    intro: paragraphs(section(home, 3, 'Presentación'))[0],
    pillars: blocks(section(home, 3, 'Protocolo en tres fases'), 4).map(({ title, body }) => ({
      title,
      description: field(body, 'Descripción'),
      outcome: field(body, 'Resultado'),
    })),
  },
  fromCode: HOME,
}));

const advisor = section(spec, 2, 'Consultor IA');
compare('Consultor IA', () => ({
  fromSpec: {
    instruction: fenced(section(advisor, 3, 'Instrucciones del modelo')),
    noKey: fenced(section(advisor, 3, 'Respuesta sin clave en el servidor')),
    greeting: fenced(section(advisor, 3, 'Mensaje inicial')),
    samples: listItems(section(advisor, 3, 'Preguntas sugeridas')),
  },
  fromCode: { instruction: SYSTEM_INSTRUCTION, noKey: NO_KEY_REPLY, greeting: ADVISOR_GREETING, samples: ADVISOR_SAMPLE_QUESTIONS },
}));

const disclaimers = section(spec, 2, 'Avisos de responsabilidad');
compare('Avisos', () => ({
  fromSpec: {
    footerOrigin: field(disclaimers, 'Origen del protocolo'),
    footer: field(disclaimers, 'Pie de página'),
    advisor: field(disclaimers, 'Consultor IA'),
    model3D: field(disclaimers, 'Modelo 3D'),
  },
  fromCode: DISCLAIMERS,
}));

results.forEach((name) => console.log(`✓ ${name}`));
if (failures.length) {
  failures.forEach((failure) => console.error(failure));
  console.error(`\nspec.md y src/data no coinciden en ${failures.length} sección(es).`);
  process.exit(1);
}
console.log('\nspec.md y src/data coinciden.');
