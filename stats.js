const os = require('os')
const log = require('./logger')

setInterval(() => {
    const { freemem, totalmem } = os

    const total = parseInt(totalmem() / 1024 / 1024)
    const mem = parseInt(freemem() / 1024 / 1024)
    const percents = parseInt((mem / total) * 100)
    const version = os.version()
    var userType = os.type()


    function userSystem() {
    if(userType = 'Windows_NT') {
        return 'Windows'
    } else if(userType = 'Linux') {
        return 'Linux'
    } else {
        return 'MacOs'
    }
}

    const stats = {
        User: `Usuário: ${userSystem(userType)}`,
        Version: `Kernel: ${version}`,
        Free: `${mem} MB`,
        Total: `${total} MB`,
        Usage: `${percents}%`
    }

    console.clear()
    console.log("=== PC STATS ===")
    console.table(stats)

    log('Rodando...')

}, 1000)
