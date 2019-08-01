const isProduction = process.env.NODE_ENV === 'production';

const {
  FuseBox,
  WebIndexPlugin,
  CSSPlugin,
  ImageBase64Plugin,
} = require('fuse-box');
const fuse = FuseBox.init({
  sourceMaps: !isProduction && {
    project: true,
    vendor: true,
    inline: true,
  },
  hash: isProduction,
  useTypescriptCompiler: true,
  debug: !isProduction,
  homeDir: 'src',
  target: 'browser@es6',
  output: isProduction ? '../$name.js' : '../dist/$name.js',
  plugins: [
    WebIndexPlugin({
      template: 'src/assets/index.html',
    }),
    CSSPlugin(),
    ImageBase64Plugin(),
  ],
});

if (!isProduction) {
  fuse.dev({
    fallback: 'index.html',
  });
}

const bundle = fuse.bundle('app').instructions(' > start.ts');

if (!isProduction) {
  bundle.hmr().watch();
}

fuse.run();
