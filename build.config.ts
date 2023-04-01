import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  // If entries is not provided, will be automatically inferred from package.json
  entries: [
    // default
    './src/index',
    // mkdist builder transpiles file-to-file keeping original sources structure
    {
      builder: 'mkdist',
      input: './src',
      outDir: './dist',
      format: 'esm',
      ext: 'mjs'
    },
    './src/index',
    {
      builder: 'mkdist',
      input: './src',
      outDir: './dist',
      format: 'cjs',
      ext: 'cjs'
    }
  ],

  // Change outDir, default is 'dist'
  outDir: './dist',
  clean: true,

  // Generates .d.ts declaration file
  declaration: true,
  failOnWarn: false
})
