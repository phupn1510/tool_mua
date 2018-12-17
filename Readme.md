########
+ cai nodejs
+ npm install


Sửa các value

nên generate địa chỉ URL infura mainnet khác. ĐK tại infura.io
Thay đổi private key và địa chỉ của mình
Sửa các thông số linh tinh value(số ETH)  gas price .....

const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/13d25e4254f9499b9861f5d1a7556b7d"));
var privatekey = '86da33bd59e43ce947824b34669f5c38ba7c0f961d5a5fbdad83b2d81d6a46e0';
var diachiGoi = '0x04139Efd6Ce12Ef324e1f388ad6eb04C197BBbF7';  
var key = new Buffer(privatekey, 'hex')
gasprice = web3.utils.numberToHex(web3.utils.toWei('21', 'gwei'));  
value = web3.utils.numberToHex(web3.utils.toWei('0.1', 'ether'));
gaslimit = web3.utils.numberToHex(web3.utils.toWei('100000', 'wei')); 


+node server.js

POST API json to http://localhost:8080