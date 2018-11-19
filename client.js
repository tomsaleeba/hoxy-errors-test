const net = require('net')

const client = net.connect({port: 8080}, function () {
  console.log('connected')
})

