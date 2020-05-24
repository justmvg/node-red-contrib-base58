const bs58 = require('bs58')

module.exports = function (RED) {
    function hex2b58(config) {
        RED.nodes.createNode(this, config)
        let node = this

        node.on('input', (msg) => {
            const bytes = Buffer.from(msg.payload, 'hex')
            const result = bs58.encode(bytes)
            msg.payload = result
            node.send(msg);
        })
    }
    RED.nodes.registerType('HEX to Base58', hex2b58)
}