const fs = require('fs')
const os = require('os')

const EventEmitter = require('events')

class Logger extends EventEmitter{
    log(message){
        this.emit('message',{message})
    }
}

const logger = new Logger()
const logFile = "./eventlog.txt"

const logToFile = (event) => {
    const logMessage = `${new Date().toDateString()} - ${event.message} \n`;
    fs.appendFileSync(logFile, logMessage)
}


logger.on('message', logToFile)

setInterval(()=>{
    const memoryUasge = (os.freemem()/os.totalmem()) * 100
    logger.log(`Current memory usage: ${memoryUasge.toFixed(2)}`)
}, 3000)


logger.log('Application satarted')
logger.log('Application event occurred')
