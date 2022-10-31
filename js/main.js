document.querySelector('.header__button').addEventListener('click', function () {
    document.querySelector('.header__button').classList.toggle('headerBtn-active');
    if(document.querySelector('.header__button').classList.contains('headerBtn-active')) {
        headerBtn.innerText = 'RO'
    } else {
        headerBtn.innerText = 'RU'
    }

})
var detector = false
var detector2 = false
var detector3 = false
var cryptoValue = {

}

// 1. Создаём новый XMLHttpRequest-объект
let xhr = new XMLHttpRequest();
let DOGEPrice = []
let LTCPrice = []
let XRPPrice = []
let ETHPrice = []
let USDTPrice = []
let BNBPrice = []
let BTCPrice = []
// 2. GET-запрос по URL
xhr.open('GET', `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DOGE,LTC,XRP,ETH,USDT,BNB,BTC&tsyms=USD,EUR,LEI,RUB&api_key=7c4f046f5ac744e7320d07f6d7de63eba244235fdfa603cee7bea30d41524829`, true);
xhr.onload = () => {
    var rc = 'USDT'
    var сc = 'USD'
    cryptoPrice = JSON.parse(xhr.response)
    var res = cryptoPrice.RAW.USDT.USD.PRICE
    if(detector3 === false) {
        cryptoValue.valute = res
    }
    DOGEPrice.push(cryptoPrice.RAW.DOGE.USD.PRICE);
    DOGEPrice.push(String(cryptoPrice.RAW.DOGE.USD.CHANGEPCT24HOUR.toFixed(1)))
    console.log('DOGE: ', cryptoPrice.RAW.DOGE.USD.PRICE)
    dogecoin.innerHTML = `$${DOGEPrice[0]}`
    if (DOGEPrice[1][0] === '-') {
        doge.innerHTML = `<img class="low-arrow" src="images/Vector_arrow.svg" alt="">
            <span>${DOGEPrice[1]}%</span>`
        doge.style.background = 'red'
    } else {
        doge.innerHTML = `<img src="images/Vector_arrow.svg" alt="">
            <span>+${DOGEPrice[1]}%</span>`
    }
    //
    LTCPrice.push(cryptoPrice.RAW.LTC.USD.PRICE);
    LTCPrice.push(String(cryptoPrice.RAW.LTC.USD.CHANGEPCT24HOUR.toFixed(1)))
    console.log('LTC: ', cryptoPrice.RAW.LTC.USD.PRICE)
    litecoin.innerHTML = `$${LTCPrice[0]}`
    if (LTCPrice[1][0] === '-') {
        ltc.innerHTML = `<img class="low-arrow" src="images/Vector_arrow.svg" alt="">
            <span>${LTCPrice[1]}%</span>`
        ltc.style.background = 'red'
    } else {
        ltc.innerHTML = `<img src="images/Vector_arrow.svg" alt="">
            <span>+${LTCPrice[1]}%</span>`
    }
    //
    XRPPrice.push(cryptoPrice.RAW.XRP.USD.PRICE);
    XRPPrice.push(String(cryptoPrice.RAW.XRP.USD.CHANGEPCT24HOUR.toFixed(1)))
    console.log('XRP: ', cryptoPrice.RAW.XRP.USD.PRICE)
    ripple.innerHTML = `$${XRPPrice[0]}`
    if (XRPPrice[1][0] === '-') {
        xrp.innerHTML = `<img class="low-arrow" src="images/Vector_arrow.svg" alt="">
            <span>${XRPPrice[1]}%</span>`
        xrp.style.background = 'red'
    } else {
        xrp.innerHTML = `<img src="images/Vector_arrow.svg" alt="">
            <span>+${XRPPrice[1]}%</span>`
    }
    //
    ETHPrice.push(cryptoPrice.RAW.ETH.USD.PRICE);
    ETHPrice.push(String(cryptoPrice.RAW.ETH.USD.CHANGEPCT24HOUR.toFixed(1)))
    console.log('ETH: ', cryptoPrice.RAW.ETH.USD.PRICE)
    ethereum.innerHTML = `$${ETHPrice[0]}`
    if (ETHPrice[1][0] === '-') {
        eth.innerHTML = `<img class="low-arrow" src="images/Vector_arrow.svg" alt="">
            <span>${ETHPrice[1]}%</span>`
        eth.style.background = 'red'
    } else {
        eth.innerHTML = `<img src="images/Vector_arrow.svg" alt="">
            <span>+${ETHPrice[1]}%</span>`
    }
    //
    USDTPrice.push(cryptoPrice.RAW.USDT.USD.PRICE);
    USDTPrice.push(String(cryptoPrice.RAW.USDT.USD.CHANGEPCT24HOUR.toFixed(1)))
    console.log('USDT: ', cryptoPrice.RAW.USDT.USD.PRICE)
    tether.innerHTML = `$${USDTPrice[0]}`
    if (USDTPrice[1][0] === '-') {
        usdt.innerHTML = `<img class="low-arrow" src="images/Vector_arrow.svg" alt="">
            <span>${USDTPrice[1]}%</span>`
        usdt.style.background = 'red'
    } else {
        usdt.innerHTML = `<img src="images/Vector_arrow.svg" alt="">
            <span>+${USDTPrice[1]}%</span>`
    }
    //
    BNBPrice.push(cryptoPrice.RAW.BNB.USD.PRICE);
    BNBPrice.push(String(cryptoPrice.RAW.BNB.USD.CHANGEPCT24HOUR.toFixed(1)))
    console.log('BNB: ', cryptoPrice.RAW.BNB.USD.PRICE)

    binancecoin.innerHTML = `$${BNBPrice[0]}`
    if (BNBPrice[1][0] === '-') {
        bnb.innerHTML = `<img class="low-arrow" src="images/Vector_arrow.svg" alt="">
            <span>${BNBPrice[1]}%</span>`
        bnb.style.background = 'red'
    } else {
        bnb.innerHTML = `<img src="images/Vector_arrow.svg" alt="">
            <span>+${BNBPrice[1]}%</span>`
    }
    //
    BTCPrice.push(cryptoPrice.RAW.BTC.USD.PRICE);
    BTCPrice.push(String(cryptoPrice.RAW.BTC.USD.CHANGEPCT24HOUR.toFixed(1)))
    console.log('BTC: ', cryptoPrice.RAW.BTC.USD.PRICE)
    bitcoin.innerHTML = `$${BTCPrice[0]}`
    if (BTCPrice[1][0] === '-') {
        btc.innerHTML = `<img class="low-arrow" src="images/Vector_arrow.svg" alt="">
            <span>${BTCPrice[1]}%</span>`
        btc.style.background = 'red'
    } else {
        btc.innerHTML = `<img src="images/Vector_arrow.svg" alt="">
            <span>+${BTCPrice[1]}%</span>`
    }
    selectPrice.onchange = function(event){
        if (event) {
            cc = event.target.options[event.target.selectedIndex].dataset.cc;
            detector = true
        } else cc = 'USD'
        if (rc === 'USDT' && cc === 'USD') {
            res = cryptoPrice.RAW.USDT.USD.PRICE

        }
        if (rc === 'ETH' && cc === 'USD') {
            res = cryptoPrice.RAW.ETH.USD.PRICE
        }
        if (rc === 'BTC' && cc === 'USD') {
            res = cryptoPrice.RAW.BTC.USD.PRICE
        }


        if (rc === 'USDT' && cc === 'EUR') {
            res = cryptoPrice.RAW.USDT.EUR.PRICE
        }
        if (rc === 'ETH' && cc === 'EUR') {
            res = cryptoPrice.RAW.ETH.EUR.PRICE
        }
        if (rc === 'BTC' && cc === 'EUR') {
            res = cryptoPrice.RAW.BTC.EUR.PRICE
        }



        if (rc === 'USDT' && cc === 'RUB') {
            res = cryptoPrice.RAW.USDT.RUB.PRICE
        }
        if (rc === 'ETH' && cc === 'RUB') {
            res = cryptoPrice.RAW.ETH.RUB.PRICE
        }
        if (rc === 'BTC' && cc === 'RUB') {
            res = cryptoPrice.RAW.BTC.RUB.PRICE
        }


        console.log('res: ', res)
        detector3 = true
        cryptoValue.valute = res
        console.log("rc :", rc)
        console.log("сc :", сc)
        document.getElementById('total').innerHTML=parseFloat(cryptoValue.valute * inputPrice.value)
    };
    selectCoin.onchange = function(event){
        if (event) {
            rc = event.target.options[event.target.selectedIndex].dataset.rc;
            detector2 = true
        } else rc = 'USDT'

        if(detector === false) {
            cc = 'USD'
        }
        if(detector2 === false) {
            rc = 'USDT'
        }
        if (rc === 'USDT' && cc === 'USD') {
            res = cryptoPrice.RAW.USDT.USD.PRICE
        }
        if (rc === 'ETH' && cc === 'USD') {
            res = cryptoPrice.RAW.ETH.USD.PRICE
        }
        if (rc === 'BTC' && cc === 'USD') {
            res = cryptoPrice.RAW.BTC.USD.PRICE
        }


        if (rc === 'USDT' && cc === 'EUR') {
            res = cryptoPrice.RAW.USDT.EUR.PRICE
        }
        if (rc === 'ETH' && cc === 'EUR') {
            res = cryptoPrice.RAW.ETH.EUR.PRICE
        }
        if (rc === 'BTC' && cc === 'EUR') {
            res = cryptoPrice.RAW.BTC.EUR.PRICE
        }



        if (rc === 'USDT' && cc === 'RUB') {
            res = cryptoPrice.RAW.USDT.RUB.PRICE
        }
        if (rc === 'ETH' && cc === 'RUB') {
            res = cryptoPrice.RAW.ETH.RUB.PRICE
        }
        if (rc === 'BTC' && cc === 'RUB') {
            res = cryptoPrice.RAW.BTC.RUB.PRICE
        }



        console.log('res: ', res)
        detector3 = true
        cryptoValue.number = res
        console.log("rc :", rc)
        console.log("сc :", сc)
        document.getElementById('total').innerHTML=parseFloat(cryptoValue.number * inputPrice.value)
    };

}

console.log('cryptoValue.number', cryptoValue.number)
function generatePrice() {
    let myValue = cryptoValue.number
    document.getElementById('total').innerHTML=parseFloat(cryptoValue.valute * inputPrice.value)
}
console.log('cryptoValue', cryptoValue)
console.log('cryptoValue.number', cryptoValue.number)
console.log('cryptoValue.valute', cryptoValue.valute)

xhr.send(null);






