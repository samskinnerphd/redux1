import webpackDevServer from './src/src/webpack-dev-server'
import server from './src/src/server'

const port = 5050

webpackDevServer.listen(port)

server.listen(port)

console.log(`Server is listening on http://127.0.0.1:${port}`)
