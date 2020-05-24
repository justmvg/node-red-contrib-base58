const bs58 = require('bs58')

module.exports = function (RED) {
    function b582hex(config) {
        RED.nodes.createNode(this, config)
        let node = this

        node.on('input', (msg) => {
            if(typeof msg.payload === 'Object' && typeof msg.payload.hash === 'String'){
            const bytes = bs58.decode(msg.payload.hash)
            let result = bytes.toString('hex')

            msg.payload.hex = result
            node.send(msg);
            }else {
                this.warn("Input is not correct.");
            }
        })
    }
    RED.nodes.registerType('Base58 to HEX', b582hex)
}