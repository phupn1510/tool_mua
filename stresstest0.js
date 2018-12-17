// prepare web3
//import Web3 from 'web3';
var Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/13d25e4254f9499b9861f5d1a7556b7d"));
const diachiMua = "0x0000000000000000000000000000000000000001";
var pk = '86da33bd59e43ce947824b34669f5c38ba7c0f961d5a5fbdad83b2d81d6a46e0';
var diachiGoi = '0x04139Efd6Ce12Ef324e1f388ad6eb04C197BBbF7';  
const test = () => {
console.log("stress test started")
//const sender_address = "0xDfb4C6b04d17a700330609A39c17E0284393Afa7"
//  const sender_password = "vnptit2018"

pk = new Buffer(pk,'hex');

//var address = '0xFb4d271F3056aAF8Bcf8aeB00b5cb4B6C02c7368';
Promise.resolve()
  .then((results) =>  {
    // give away ethers

// promise sequence
    return new Promise((resolve, reject) => {
      let sequence = Promise.resolve()
      for ( let idx=0; idx<addresses.length; idx++ ) {
const receiver = addresses[idx]
sequence = sequence.then(() => {
          // transfer ether
          const params = {
            from: sender_address,
            gas: 5000000,
            to: receiver,
            value: 500000000000,
          }
          // return web3.eth.sendTransaction(params)
          web3.eth.sendTransaction(params)
        })
.then((results) => {
console.log("results: ", results)
if ( idx === ( addresses.length - 1 ) ){
            resolve()
          } else {
            return "OK"
          }
        })
        .catch((err) =>{
          console.log("err: ", err)
          if ( idx === ( addresses.length - 1 ) ){
            resolve()
          } else {
            return "NG"
          }
        })
      }
    })
  })
.then(() => {
    console.log("stress test ended")
  })
.catch((err) => {
    console.log("err: ", err)
  })
}
test();