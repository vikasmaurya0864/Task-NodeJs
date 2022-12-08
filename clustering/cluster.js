const cluster = require('cluster');
const cpus = require('os').cpus().length;
if (cluster.isMaster) {
        for (let i = 0; i < cpus; i ++) {
                cluster.fork()
        }
        cluster.on('exit', function () {
                cluster.fork();
        })
}
else{
        require('./index')
}
console.log("hello");
