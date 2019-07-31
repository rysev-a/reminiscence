import { Compute } from 'interfaces';
import initialize from './initialize';
import wireFrame from './wireframe';
import topMenu from './modules/top-menu';
import leftMenu from './modules/examples/left-menu';
import navigationTransducer from './transducers/navigation';
import dev from './modules/dev';
import pages from './pages';
import { mergeComputers } from 'utils/flow/flow';

const main: Compute = mergeComputers(
  dev,
  wireFrame,
  initialize,
  topMenu,
  navigationTransducer,
  pages
);

export default main;
