import unpackMessage from './unpackMessage';
import isolateEffects from './isolateEffects';

const isolateComputer = scope => computer => rawMessage =>
  isolateEffects(scope)(computer(unpackMessage(scope)(rawMessage)));

export default isolateComputer;
