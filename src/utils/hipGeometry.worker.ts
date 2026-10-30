import { buildFemurGeometry, buildPelvisGeometry, serializeGeometry } from './hipAnatomy';

// Generar los huesos lleva cerca de un segundo: se hace fuera del hilo principal
const femur = serializeGeometry(buildFemurGeometry());
const pelvis = serializeGeometry(buildPelvisGeometry());
self.postMessage({ femur, pelvis }, {
  transfer: [femur.position.buffer, femur.normal.buffer, femur.color.buffer, femur.index.buffer, pelvis.position.buffer, pelvis.normal.buffer, pelvis.color.buffer, pelvis.index.buffer],
});
