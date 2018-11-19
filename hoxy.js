const hoxy = require('hoxy');

const proxy = hoxy.createServer({
  reverse: 'http://swarmapi.ausplots.aekos.org.au'
}).listen(8080, function () {
  console.error('Startup successful')
})

process.on('SIGINT', function () {
  proxy.close()
  process.exit() // https://github.com/nodejs/node/issues/4182#issuecomment-163425328
})

proxy.log('error warn debug', process.stderr)
proxy.log('info', process.stdout)

proxy.intercept({
    phase: 'response',
    // method: 'GET',
}, function (req, resp, cycle) {
  delete resp.headers.connection
  delete resp.headers.server
  console.log(resp.headers)
  teeForLogging(req, resp, cycle) // we're not waiting for logging, that happens in the background
})

async function teeForLogging (req, resp, cycle) {
  console.log('in async')
}

