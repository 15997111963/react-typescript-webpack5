const glob = require('glob')
const path = require('path')

const entry = {}
const entrys = path.resolve(__dirname, '../src/entrys')

new glob.Glob('!(_)*', {
    cwd: entrys,
    sync: true
}).found.forEach(page => {
    require(path.resolve(entrys, `${page}/entry.js`)).entry.forEach(item => {
        entry[`${page}/${item}`] = path.resolve(entrys, `${page}/${item}.js`)
    })
})

module.exports = {
    entry,
    entrys
}