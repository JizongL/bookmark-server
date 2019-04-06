const winston = require('winston')
const {NODE_ENV} = require('./config')

// set up winston logger 
const logger = winston.createLogger({
  level:'info',
  format:winston.format.json(),
  transpports:[
    new winston.transports.File({filename:'info.log'})
  ]
});

if(NODE_ENV !=='production'){
  logger.add(new winston.transports.Console({
    format:winston.format.simple()
  }))
}

module.exports = logger