import { mergeComputers } from 'utils/flow/flow';
import leftMenu from './left-menu';
import examplesContainer from './examples-container/dom';
import counterSimple from './counter/counter-simple';

const examples = mergeComputers(leftMenu, examplesContainer, counterSimple);

export default examples;
