const chalk = require('chalk').default

const maps = {
    i: chalk.cyan,
    s: chalk.green,
    w: chalk.bold.yellow,
    e: chalk.bold.magenta
}

function log (message: any, types: keyof typeof maps = "i") {
    console.log(maps[types](message))
}

module.exports = log