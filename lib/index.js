// load our server module
var server = require('./server');

// tell the server to listen on a specific port
server.listen(3000, function() {
console.info('Server listening on port 3000!');
});