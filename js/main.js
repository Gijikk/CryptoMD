document.querySelector('.header__button').addEventListener('click', function () {
    document.querySelector('.header__button').classList.toggle('headerBtn-active');
    if(document.querySelector('.header__button').classList.contains('headerBtn-active')) {
        headerBtn.innerText = 'RO'
        headerBtn.style.background = 'white'
    } else {
        headerBtn.innerText = 'RU'
        headerBtn.style.background = '#BAFD02FF'
    }

})
var selectCoin = document.getElementById('selectCoin')
var selectPrice = document.getElementById('selectPrice')
var selectCoinSwap = document.getElementById('selectCoinSwap')
var selectPriceSwap = document.getElementById('selectPriceSwap')
var reverseBtn = document.querySelector('.calculator__reverseBtn')

var rc = selectCoin.options[selectCoin.selectedIndex].dataset.rc;
console.log('RC: ', rc)
var vc = selectPrice.options[selectPrice.selectedIndex].dataset.vc;
console.log('RC: ', vc)
var rcSwap = selectCoinSwap.options[selectCoinSwap.selectedIndex].dataset.rc;
console.log('RCSwap: ', vcSwap)
var vcSwap = selectPriceSwap.options[selectPriceSwap.selectedIndex].dataset.vc;
console.log('RCSwap: ', vcSwap)
var cryptoValue = {

}
var detector = false







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
xhr.open('GET', `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DOGE,LTC,XRP,ETH,USDT,BNB,BTC&tsyms=USD,EUR,MDL,RUB&api_key=7c4f046f5ac744e7320d07f6d7de63eba244235fdfa603cee7bea30d41524829`, true);
xhr.onload = () => {
    reverseBtn.addEventListener('click', function () {
        reverseBtn.classList.toggle('reverseBtn-active');
        rcSwap = rc;
        vcSwap = vc;

        for (let i = 0; i< selectCoinSwap.options.length; i++) {
            if(selectCoinSwap.options[i].dataset.rc === rcSwap) {
                selectCoinSwap.options[i].selected = 'true'
            }
        }


        for (let i = 0; i< selectPriceSwap.options.length; i++) {
            if(selectPriceSwap.options[i].dataset.vc === vcSwap) {
                selectPriceSwap.options[i].selected = 'true'
            }
        }

        inputPriceSwap.value = parseFloat(res * inputPrice.value)
        document.getElementById('totalSwap').innerHTML=parseFloat(inputPriceSwap.value / resSwap)
        console.log('rcSwap', rcSwap);
        generatePriceSwap()
        generatePrice()
        if(reverseBtn.classList.contains('reverseBtn-active')) {
            console.log('rcSwap0', rcSwap);
            console.log('vcSwap0', vcSwap)
            // selectCoinSwap.options[selectCoinSwap.selectedIndex].dataset.rc = rcSwap;
            // selectPriceSwap.options[selectPriceSwap.selectedIndex].dataset.vc = vcSwap;
            // console.log('1', selectCoinSwap.options[selectCoinSwap.selectedIndex].dataset.rc)
            // console.log('2', selectPriceSwap.options[selectPriceSwap.selectedIndex].dataset.vc)
            scoinSwap.style.display = "block";
            spriceSwap.style.display = "block";
            scoin.style.display = "none";
            sprice.style.display = "none";
            inputPriceSwap.value = parseFloat(res * inputPrice.value)
            document.getElementById('totalSwap').innerHTML=parseFloat(inputPriceSwap.value / resSwap)
            console.log('rcSwap1', rcSwap);
            console.log('vcSwap1', vcSwap)
            detector = true;

        }
        else {
            rc = selectCoin.options[selectCoin.selectedIndex].dataset.rc;
            vc = selectPrice.options[selectPrice.selectedIndex].dataset.vc;
            scoin.style.display = "block";
            sprice.style.display = "block";
            scoinSwap.style.display = "none";
            spriceSwap.style.display = "none";
            inputPrice.value = parseFloat(inputPriceSwap.value / resSwap)
            document.getElementById('total').innerHTML=parseFloat(res * inputPrice.value)
            detector = false;
        }
    })
    cryptoPrice = JSON.parse(xhr.response)
    console.dir(cryptoPrice)
    // var res = cryptoPrice.RAW.USDT.USD.PRICE;


    function cryptoCard(mas, coinName, htmlID, htmlID2) {
        mas.push(cryptoPrice["RAW"][`${coinName}`]["USD"]["PRICE"])
        mas.push(String(cryptoPrice["RAW"][`${coinName}`]["USD"]["CHANGEPCT24HOUR"].toFixed(1)))
        console.log(`${coinName}: `, cryptoPrice["RAW"][`${coinName}`]["USD"]["PRICE"])
        htmlID.innerHTML = `$${mas[0]}`
        if (mas[1][0] === '-') {
            htmlID2.innerHTML = `<img class="low-arrow" src="images/Vector_arrow.svg" alt="">
            <span>${mas[1]}%</span>`
            htmlID2.style.background = 'red'
        } else {
            htmlID2.innerHTML = `<img src="images/Vector_arrow.svg" alt="">
            <span>+${mas[1]}%</span>`
        }
    }

    function setResult(rcc, vcc) {
        res = cryptoPrice["RAW"][`${rcc}`][`${vcc}`]["PRICE"]
        coin.innerHTML = `<img src=\"images/${rcc}.svg\" alt=\"\">`
        valut.innerHTML = `<img src=\"images/${vcc}.svg\" alt=\"\">`
        return res
    }
    // function setResultSwap(rcc, vcc) {
    //     resSwap = cryptoPrice["RAW"][`${rcc}`][`${vcc}`]["PRICE"]
    //     coinSwap.innerHTML = `<img src=\"images/${rcc}.svg\" alt=\"\">`
    //     valutSwap.innerHTML = `<img src=\"images/${vcc}.svg\" alt=\"\">`
    //     return resSwap
    // }
    console.log('rcSwap: ', rcSwap)
    console.log('vcSwap: ', vcSwap)
    console.log('setResult:', setResult(rc, vc))
    console.log('setResultSwap:', setResultSwap(rcSwap, vcSwap))

    res = setResult(rc, vc)
    resSwap = setResultSwap(rcSwap, vcSwap)



    cryptoCard(DOGEPrice, 'DOGE', dogecoin, doge)
    cryptoCard(LTCPrice, 'LTC', litecoin, ltc)
    cryptoCard(XRPPrice, 'XRP', ripple, xrp)
    cryptoCard(ETHPrice, 'ETH', ethereum, eth)
    cryptoCard(USDTPrice, 'USDT', tether, usdt)
    cryptoCard(BNBPrice, 'BNB', binancecoin, bnb)
    cryptoCard(BTCPrice, 'BTC', bitcoin, btc)

    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////
    selectPrice.onchange = function(event){
        if (event) {
            vc = event.target.options[event.target.selectedIndex].dataset.vc;
        } else {
            vc = selectPrice.options[selectPrice.selectedIndex].dataset.vc;
        }
        res = setResult(rc, vc)
        document.getElementById('total').innerHTML=parseFloat(res * inputPrice.value)
        console.log('res: ', res)
        cryptoValue.valute = res
        console.log("rc :", rc)
        console.log("сc :", vc)
    };
    selectCoin.onchange = function(event){
        if (event) {
            rc = event.target.options[event.target.selectedIndex].dataset.rc;
        } else {
            rc = selectCoin.options[selectCoin.selectedIndex].dataset.rc;
        }
        res = setResult(rc, vc)
        document.getElementById('total').innerHTML=parseFloat(res * inputPrice.value)
        console.log('res: ', res)
        cryptoValue.number = res
        console.log("rc :", rc)
        console.log("vc :", vc)
    };
    selectPriceSwap.onchange = function(event){
            if (event) {
                vcSwap = event.target.options[event.target.selectedIndex].dataset.vc;
            } else {
                vcSwap = selectPriceSwap.options[selectPriceSwap.selectedIndex].dataset.vc;
            }
            resSwap = setResultSwap(rcSwap, vcSwap)
            document.getElementById('totalSwap').innerHTML=parseFloat(inputPriceSwap.value / setResultSwap(rcSwap, vcSwap))
        };
    selectCoinSwap.onchange = function(event){
            if (event) {
                rcSwap = event.target.options[event.target.selectedIndex].dataset.rc;
            } else {
                rcSwap = selectCoinSwap.options[selectCoinSwap.selectedIndex].dataset.rc;
            }
            resSwap = setResultSwap(rcSwap, vcSwap)
            document.getElementById('totalSwap').innerHTML=parseFloat(inputPriceSwap.value / setResultSwap(rcSwap, vcSwap))
        };



    console.log('cryptoValue.number', cryptoValue.number)
    console.log('cryptoValue.valute', cryptoValue.valute)
    document.getElementById('total').innerHTML=parseFloat(res * inputPrice.value)
}

function setResultSwap(rcc, vcc) {
    resSwap = cryptoPrice["RAW"][`${rcc}`][`${vcc}`]["PRICE"]
    coinSwap.innerHTML = `<img src=\"images/${rcc}.svg\" alt=\"\">`
    valutSwap.innerHTML = `<img src=\"images/${vcc}.svg\" alt=\"\">`
    return resSwap
}
function generatePrice() {
        document.getElementById('total').innerHTML=parseFloat(res * inputPrice.value)
}
function generatePriceSwap() {
    document.getElementById('totalSwap').innerHTML=parseFloat(inputPriceSwap.value / setResultSwap(rcSwap, vcSwap))
}
console.log('cryptoValue', cryptoValue)
console.log('cryptoValue.number', cryptoValue.number)
console.log('cryptoValue.valute', cryptoValue.valute)



let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelector('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна


    openPopupButtons.addEventListener('click', function () { // Для каждой вешаем обработчик событий на клик
         // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
        if(detector === false) {
            var message = `${inputPrice.value} ${rc}
            checkboxUSD: ${checkUSD.value}
            checkboxEUR: ${checkEUR.value}
            checkboxLEI: ${checkLEI.value}
            checkboxCash: ${checkCash.value}
            checkboxCard: ${checkCard.value}
            check: ${check.value}`
            popupCost.innerHTML = `${inputPrice.value} ${rc}`
        } else {
            // message.innerHTML = `${inputPriceSwap.value} ${vcSwap}`
            popupCost.innerHTML = `${inputPriceSwap.value} ${vcSwap}`
        }

    })


closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg) { // Если цель клика - фот, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
    }
});

xhr.send(null);






