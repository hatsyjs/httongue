import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import flatDts from 'rollup-plugin-flat-dts';
import sourcemaps from 'rollup-plugin-sourcemaps';
import ts from 'rollup-plugin-typescript2';
import typescript from 'typescript';

export default {
  input: {
    hten: './src/index.ts',
  },
  plugins: [
    commonjs(),
    ts({
      typescript,
      tsconfig: 'tsconfig.main.json',
      cacheRoot: 'target/.rts2_cache',
      useTsconfigDeclarationDir: true,
    }),
    nodeResolve(),
    sourcemaps(),
  ],
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true,
      entryFileNames: '[name].cjs',
      chunkFileNames: '_[name].cjs',
    },
    {
      dir: '.',
      format: 'esm',
      sourcemap: true,
      entryFileNames: 'dist/[name].js',
      chunkFileNames: 'dist/_[name].js',
      plugins: [
        flatDts({
          tsconfig: 'tsconfig.main.json',
          lib: true,
        }),
      ],
    },
  ],
};
