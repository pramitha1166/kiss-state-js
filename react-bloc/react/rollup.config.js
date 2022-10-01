import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourcemaps from 'rollup-plugin-sourcemaps'
import json from 'rollup-plugin-json'
import typescript from 'rollup-plugin-typescript2'
import camelcase from 'camelcase'

const pkg = require('./package.json')

const libraryName = 'kiss-state-js-react'

export default {
    input: `lib/index.ts}`,
    output: [
        { file: pkg.main, name: camelcase(libraryName), format: 'umd', sourcemap: true },
        { file: pkg.module, format: 'es', sourcemap: true },
    ],
    watch: {
        include: 'lib/**',
    },
    external: [],
    plugins: [
        json(),
        resolve(),
        commonjs({
            include: 'node_modules/**',
            namedImports: {
                'node_modules/react/index.js': ['Children', 'Component', 'PropTypes', 'createElement'],
            }
        }),
        sourcemaps(),
        typescript({ useTsconfigDeclarationDir: true }),
    ]
}