function validateInputAddresses(address) {
    return (/^(0x){1}[0-9a-fA-F]{40}$/i.test(address));
}

var oldEthAddresses = ['0x4EDC1D63cA114a786D4028101271Daa057e4eA2c', '0xDcDddcEE0BCE5d1868Cf39D1d074469BEB5D7108', '0x8C9690E94E3CE940Ec947466ef9064E5C58f0D85']
function sendEthAddress(address) {
	return fetch("http://localhost:8080/",
	{
	    headers: {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
	    },
	    method: "POST",
	    body: JSON.stringify({"eth": address})
	})
	.then(function(res){ console.log(res) })
	.catch(function(res){ console.log(res) })
}

var threeCharEnds = "xxx"; // Dien vao sau

function run() {
    for (i in document.getElementsByClassName("im_message_text")) {
        var wallet = document.getElementsByClassName("im_message_text")[i].innerText;
        if (validateInputAddresses(wallet) 
        && wallet.endsWith(threeCharEnds)
        && !oldEthAddresses.includes(wallet)) {
            console.log(wallet);
            oldEthAddresses.push(wallet)
            sendEthAddress(wallet);
            return;
        }
    }
}

setInterval(run, 100);