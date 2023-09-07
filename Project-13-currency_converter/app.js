const convertFrom = document.querySelector('#convertFrom'),
convertMoney = document.querySelector('#convertMoney'),
convertTo = document.querySelector('#convertTo'),
convert = document.querySelector('#convert'),
con = document.querySelector('#con'),
con2 = document.querySelector('#con2'),
conForm = document.querySelector('#conForm'),
conTo = document.querySelector('#conTo') ;

convert.addEventListener('click',()=>{
    let convertFromValue = convertFrom.value;
    let convertFromMoney = convertMoney.value;
    let convertToValue = convertTo.value;
    let count = `${allCurrency[`${convertFromValue}`][`${convertToValue}`]}`;
    let result = `${convertFromMoney}` * `${count}`;
    con.value = convertFromMoney;
    conForm.innerHTML = convertFromValue;
    con2.value = result;
    conTo.innerHTML = convertToValue;
});