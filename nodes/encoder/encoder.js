const bs58 = require('bs58')

module.exports = function (RED) {
    function hex2b58(config) {
        RED.nodes.createNode(this, config)
        let node = this

        node.on('input', (msg) => {
            if(typeof msg.payload === 'String'){
            const bytes = Buffer.from(msg.payload, 'hex')
            const result = bs58.encode(bytes)

            msg.payload.encoded = result
            node.send(msg);
            }else {
                this.warn("Input is not of type String.");
            }
        })
    }
    RED.nodes.registerType('HEX to Base58', hex2b58)
}