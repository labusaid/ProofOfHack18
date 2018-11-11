const IPFS = require('ipfs')

const node = new IPFS()

node.on('ready', async () => {

    const filesAdded = await node.files.add({
      path: 'hello.txt',
      content: Buffer.from('Hello World 101')
    })
    
    console.log('Added file:', filesAdded[0].path, filesAdded[0].hash)
  })