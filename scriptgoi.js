// prepare web3
//import Web3 from 'web3';
var Web3 = require("web3");
const Tx = require('ethereumjs-tx');
const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/13d25e4254f9499b9861f5d1a7556b7d"));
const diachiMua = "0x78fC42faDE0cAD251120fDf8e91B4C7e9833Ee9e";
var privatekey = '86da33bd59e43ce947824b34669f5c38ba7c0f961d5a5fbdad83b2d81d6a46e0';
var diachiGoi = '0x04139Efd6Ce12Ef324e1f388ad6eb04C197BBbF7';  
var key = new Buffer(privatekey, 'hex')
//const account = web3.eth.accounts.privateKeyToAccount('0x' + privatekey);
//web3.eth.accounts.wallet.add(account);
//web3.eth.defaultAccount = account.address;
const test = () => {
console.log("Goi ETH bat dau")
//const sender_address = "0xDfb4C6b04d17a700330609A39c17E0284393Afa7"
//  const sender_password = "vnptit2018"





 var tra = {
      from: diachiGoi,
   //   nonce: nonce,
      gasPrice: web3.utils.toHex(web3.utils.toWei('20', 'gwei')),
      gasLimit: 100000,
      to: diachiMua,
      value: web3.utils.toHex(web3.utils.toWei('1', 'ether')),
    //  data: data,
    };
    var tx = new Tx(tra);
    tx.sign(key);

   var stx = tx.serialize();
    web3.eth.sendSignedTransaction('0x' + stx.toString('hex'), (err, hash) => {
    if (err) { console.log(err); return; }
    console.log('transaction created: ' + hash);
});

}
test();