const Web3 = require('web3');

web3 = new Web3(new 
Web3.providers.HttpProvider("https://mainnet.infura.io/v3/My API Key"));

// Get Contract ABI
var abi = JSON.parse('[{"MY ABI"}]')

// Define Variable for Contract ABI
var AK = new web3.eth.Contract(abi);

// Buffer PK
var privateKey = new Buffer('Private Key')

// create transaction - to address, amount
var data = AK.methods.transfer("To Address", 10).encodeABI();

// object to hold the transaction data From Address
web3.eth.getTransactionCount('From Address').then(count => {

var txData = {

nonce: web3.utils.toHex(count),

gasLimit: web3.utils.toHex(25000),

gasPrice: web3.utils.toHex(web3.eth.gasPrice),

to: "To Address",

from: "From Address",

data: data

}

var transaction = new TX(txData);

transaction.sign(privateKey);

var serialisedTransaction = transaction.serialize().toString('hex');

web3.eth.sendSignedTransaction('0x' + serialisedTransaction);

});