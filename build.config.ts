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
      format: 'esm'
    }
  ],

  // Change outDir, default is 'dist'
  outDir: './dist',

  // Generates .d.ts declaration file
  declaration: true,
  failOnWarn: false
})

const pkg = require('./package.json')
const rev = require('child_process')
  .execSync('git rev-parse --short=8 HEAD')
  .toString()
  .trim()
pkg.version = pkg.version + '-next' + rev

require('fs').writeFileSync('./package.json', JSON.stringify(pkg, null, 2))
