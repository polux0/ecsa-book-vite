import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import svgr from '@svgr/rollup';
import svgLoader from 'vite-svg-loader';


import path from 'path'
import { readdirSync } from 'fs'

export default defineConfig({
  build: {
    rollupOptions: {
      // manual chunks for entries
      input: {
        'index': path.resolve(__dirname, 'index.html'),  // Add this line
        // 'main': path.resolve(__dirname, 'main.js'),  
        ...getFilesFromDir('web3'),
        ...getFilesFromDir('db'),
        ...getFilesFromDir('ux'),
        ...getFilesFromDir('util')
      }
    },
    assetsDir: '.', // Flatten the asset directory structure
  },
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'imgs/*', dest: 'imgs' },         // Just 'imgs', not 'dist/imgs'
        { src: 'orbs/*', dest: 'orbs' },
        { src: '/book/imgs/*', dest: 'book/imgs' },         // Just 'orbs', not 'dist/orbs'
        { src: 'glossary.json', dest: '' },      // Just '' to place directly under dist/
        { src: 'audiobook/*', dest: 'audiobook' },
        { src: 'css/*', dest: 'css' },
      ]
    }),
    svgr(),svgLoader()
  ],
  server: {
    port: 3000,
    strictPort: true,
  }
})

// Helper function to get all .js files for a given directory
function getFilesFromDir(dir) {
  return readdirSync(path.resolve(__dirname, dir))
      .filter(file => file.endsWith('.js'))
      .reduce((acc, curr) => {
          const name = path.basename(curr, '.js')
          acc[`${dir}/${name}`] = path.resolve(__dirname, dir, curr)
          return acc
      }, {})
}
