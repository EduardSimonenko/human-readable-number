module.exports = function toReadable(number) {
    const toTen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const overTen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundred = 'hundred';
    let result = ''
    if (number < 10) {
        return toTen[number];
    }
    else if (number >= 10 && number < 20) {
        return overTen[number - 10]
    }
    else if (number >= 10 && number < 20) {
        return overTen[number - 10]
    }
    else if ((number >= 20 && number < 100) && (number % 10 === 0)) {
        return tens[number / 10]
    }
    else if ((number >= 20 && number < 100) && (number % 10 !== 0)) {
        return result = `${tens[Math.floor(number / 10)]} ${toTen[number % 10]}`
    }
    else if (number === 100) {
        return result = `one ${hundred}`
    }
    else if ((number > 100 && number < 1000) && (number % 100 === 0)) {
        return result = `${toTen[Math.floor(number / 100)]} ${hundred}`
    }
    else if ((number > 100 && number < 1000) && (number % 10 === 0) && ((Math.floor((number % 100) / 10)) < 2)) {
        return result = `${toTen[Math.floor(number / 100)]} ${hundred} ${overTen[0]}`
    }
    else if ((number > 100 && number < 1000) && (number % 10 === 0)) {
        return result = `${toTen[Math.floor(number / 100)]} ${hundred} ${tens[Math.floor((number % 100) / 10)]}`
    }
    else if ((number > 100 && number < 1000) && ((number % 100) < 10)){
        return result = `${toTen[Math.floor(number / 100)]} ${hundred} ${toTen[number % 100]}`     
    }
    else if ((number > 100 && number < 1000) && ((number % 100) > 10) && ((number % 100) < 20)){
        return result = `${toTen[Math.floor(number / 100)]} ${hundred} ${overTen[number % 10]}`     
    }
    else if (number > 100 && number < 1000){
        return result = `${toTen[Math.floor(number / 100)]} ${hundred} ${tens[Math.floor((number % 100) / 10)]} ${toTen[(number % 100) % 10]}`       
    }

    else result = 'enter valid number';
}
