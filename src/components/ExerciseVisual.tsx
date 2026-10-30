import React, { Suspense, lazy, useState } from 'react';
import { Exercise } from '../types';
import { EXERCISE_ANIMATIONS } from '../data/exerciseAnimations';
import { ExerciseDiagram } from './ExerciseDiagram';

// three.js solo se descarga al abrir un ejercicio que tenga animación
const Exercise3DViewer = lazy(() => import('./Exercise3DViewer'));

interface Props {
  type: Exercise['diagramType'];
  side?: 'left' | 'right';
  playing?: boolean;
}

const supportsWebGL = () => {
  try {
    return !!document.createElement('canvas').getContext('webgl2');
  } catch {
    return false;
  }
};

class ViewerBoundary extends React.Component<{ fallback: React.ReactNode; children: React.ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

export const ExerciseVisual: React.FC<Props> = ({ type, side, playing }) => {
  const [canRender3D] = useState(supportsWebGL);
  const animation = EXERCISE_ANIMATIONS[type];
  const diagram = <ExerciseDiagram type={type} />;

  if (!animation || !canRender3D) return diagram;

  return (
    <ViewerBoundary fallback={diagram}>
      <Suspense fallback={diagram}>
        <Exercise3DViewer animation={animation} side={side} playing={playing} />
      </Suspense>
    </ViewerBoundary>
  );
};
