import { mergeComputers } from 'utils/flow/flow';
import counterContainer from './counter-container';
import counterSimple from './counter-simple';
import counterDebounce from './counter-debounce';
import counterDelayed from './counter-delayed';
import isolateComputer from 'utils/flow/isolate/isolateComputer';

const counter = mergeComputers(
  counterContainer,
  counterSimple,
  counterDebounce,
  isolateComputer('delayed')(counterDelayed)
);

export default counter;
