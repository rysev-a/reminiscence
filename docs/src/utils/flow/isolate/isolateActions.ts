import { map } from 'ramda';
import isolateEffects from './isolateEffects';

const isolateActions = scope =>
  map((action: any) => message => isolateEffects(scope)(action(message)));

export default isolateActions;
