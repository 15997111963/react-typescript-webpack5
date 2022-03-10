const chalk = require('chalk').default

const maps = {
    i: chalk.cyan,
    s: chalk.green,
    w: chalk.bold.yellow,
    e: chalk.bold.magenta
}

function log(..._: any[]): void {
    return maps.i.call(void 0, ...arguments)
}

function err(..._: any[]): void {
    return maps.e.call(void 0, ...arguments)
}

module.exports = {
    log,
    err
}