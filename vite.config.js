import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import sass from 'sass';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    build: {
      sourcemap: true,

      rollupOptions: {
        input: glob.sync('./src/*.html'),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: 'commonHelpers.js',
        },
      },
      outDir: '../dist',
    },
    plugins: [injectHTML(), FullReload(['./src/**/**.html']),    {
      name: 'vite-plugin-scss',
      setup(build) {
        build.onLoad({ filter: /\.scss$/ }, async (args) => {
          const result = await sass.render({ file: args.path });
          return {
            contents: result.css.toString(),
            loader: 'css',
          };
        });
      },
    }],
  };
});
