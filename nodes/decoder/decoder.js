const bs58 = require('bs58')

module.exports = function (RED) {
    function b582hex(config) {
        RED.nodes.createNode(this, config)
        let node = this

        node.on('input', (input) => {
            const bytes = bs58.decode(input)
            let result = bytes.toString('hex')

            msg.payload = result
            node.send(msg);
        })
    }
    RED.nodes.registerType('Base58 to HEX', b582hex)
}