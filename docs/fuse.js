const {
  FuseBox,
  WebIndexPlugin,
  CSSPlugin,
  ImageBase64Plugin,
} = require('fuse-box');
const fuse = FuseBox.init({
  sourceMaps: { project: true, vendor: true, inline: true },
  useTypescriptCompiler: true,
  debug: 'true',
  homeDir: 'src',
  target: 'browser@es6',
  output: 'dist/$name.js',
  plugins: [
    WebIndexPlugin({ template: 'src/assets/index.html' }),
    CSSPlugin(),
    ImageBase64Plugin(),
  ],
});

fuse.dev({
  fallback: 'index.html',
});

fuse
  .bundle('app')
  .instructions(' > start.ts')
  .hmr()
  .watch();

fuse.run();
