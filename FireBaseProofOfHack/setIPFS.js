const Web3 = require('web3');
const Abi = require('./SecureStorage.json'); 
let web3 = new Web3(
    new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/b6d936a4dcb84fb39bcb2cf9e33d4b31')
);

const MyContract = web3.eth.contract(Abi);
let ContractInstance = MyContract.at(); 

function SetIPFSAddress(_ipfs_address) {
    var MyContract = new web3.eth.Contract(Abi, '0xAd12c3776fdda9a04985d418B7A321a26AFBc521');
    MyContract.methods.setIPFSAddress(0x05384A688f405dB8b5b687FD3Abf1ED62dBa0327, _ipfs_address).send( function(error, result){
        console.log(error);
        console.log(result);
    });
    
}
module.exports.SetIPFSAddress = SetIPFSAddress;  