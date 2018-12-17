// prepare web3
//import Web3 from 'web3';
var Web3 = require("web3");
const Tx = require('ethereumjs-tx');
const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/13d25e4254f9499b9861f5d1a7556b7d"));
const diachiMua = '0x78fC42faDE0cAD251120fDf8e91B4C7e9833Ee9e';
var privatekey = '86da33bd59e43ce947824b34669f5c38ba7c0f961d5a5fbdad83b2d81d6a46e0';
var diachiGoi = '0x04139Efd6Ce12Ef324e1f388ad6eb04C197BBbF7';  
var key = new Buffer(privatekey, 'hex')
gasprice = web3.utils.numberToHex(web3.utils.toWei('21', 'gwei'));  
value = web3.utils.numberToHex(web3.utils.toWei('0.1', 'ether'));
gaslimit = web3.utils.numberToHex(web3.utils.toWei('100000', 'wei')); 
console.log("Goi ETH bat dau")
web3.eth.getTransactionCount(diachiGoi).then(count => {

//var testcount = web3.eth.getTransactionCount(diachiGoi,function(err,count){
console.log(count);
//count=count+1;
var txData = {
nonce: count,
gasLimit: gaslimit,
gasPrice: gasprice,
to: diachiMua,
from: diachiGoi,
value: value
}
console.log(txData);
var transaction = new Tx(txData);
console.log(transaction);
transaction.sign(key);
//console.log(transaction);
var serialisedTransaction = transaction.serialize().toString('hex');
console.log(serialisedTransaction);
web3.eth.sendSignedTransaction('0x' + serialisedTransaction,(err, hash1) => {

    if (err) { console.log(err); return; }
    console.log('transaction created: ' + hash1);

  });
});


