// ДОМАШНЯ РОБОТА.

// 1. Написать функцию, которая принимает 2 числа и возвращает - 1, если первое меньше, 
// чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
let numA = prompt('Вкажіть перше число', 0);
let numB = prompt('Вкажіть друге число', 0);

function chechNum(numA, numB) {
    if (numA == numB) return 0;
    return (numA < numB) ? -1 : 1;
}

console.log(chechNum(numA, numB));

// 2. Написать функцию, которая вычисляет факториал переданного ей числа.
let numFactorial = prompt('Факторіал з числа - ', 0);

function getFactorial(n) {
    if (n == 0) return 1;
    return (n != 1) ? n * getFactorial(n - 1) : 1;
};

console.log(`Факторіал з числа ${numFactorial} = ${getFactorial(numFactorial)};`);

// 3.Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.
// Например: цифры 1, 4, 9 превратятся в число 149.
let cufra1 = prompt('Введіть першу цифру');
let cufra2 = prompt('Введіть другу цифру');
let cufra3 = prompt('Введіть третю цифру');

function makeNumber(num1, num2, num3) {
    return Number(num1 + num2 + num3)
}

console.log(makeNumber(cufra1, cufra2, cufra3));

// 4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его 
// площадь.Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
let storonaA = +prompt('Введіть довжину сторони А', 0);
let storonaB = +prompt('Введіть довжину В', 0);

function getSquare(s1, s2) {
    return s2 ? s1 *= s2 : s1 *= s1;
};

console.log(getSquare(storonaA, storonaB));

// 5. Написать функцию, которая проверяет, является ли переданное ей число совершенным.
// Совершенное число – это число, равное сумме всех своих собственных делителей.
let numPerfect = +prompt('Введіть число', 0);

function checkPerfect(numS) {
    let sum = 0;
    for (stepNum = numS / 2; stepNum > 0; stepNum--) {
        if (numS % stepNum == 0) sum += stepNum;
    }
    return (sum == numS) ? true : false
};
checkPerfect(numPerfect) ? console.log("Число досконале.") : console.log("Число не досконале.");

// 6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона, 
// и выводит только те числа из диапазона, которые являются совершенными.Используйте 
// написанную ранее функцию, чтобы узнавать, совершенное число или нет.
let pochatok = +prompt('Введіть початок діапазону', 0);
let kinec = +prompt('Введіть кінець діапазону', 0);

function getDiapazon(start, end) {

    for (let diapazonNum = start; diapazonNum < end; diapazonNum++) {
        if (!checkPerfect(diapazonNum)) continue
        else console.log(diapazonNum);
    };
};

getDiapazon(pochatok, kinec);
// 7. Написать функцию, которая принимает время(часы, минуты, секунды) и выводит его на
//  экран в формате «чч: мм: сс».Если при вызове функции минуты и / или секунды не были
//   переданы, то выводить их как 00.
let userHour = prompt("Введіть годину:", "00");
let userMin = prompt("Введіть хвилини:", "00");
let userSec = prompt("Введіть секунди:", "00");

function showTime(hour, min, sec) {
    console.log(`Час - ${hour}: ${min}: ${sec}.`)
};

showTime(userHour, userMin, userSec);

// 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это 
// время в секундах.
let userHour = prompt("Введіть годину:", "00");
let userMin = prompt("Введіть хвилини:", "00");
let userSec = prompt("Введіть секунди:", "00");

function tranformToSec(hour, min, sec) {
    sec = +sec + +min * 60 + +hour * 3600;
    return sec
};

console.log(tranformToSec(userHour, userMin, userSec));

// 9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты 
// и секунды и возвращает в виде строки «чч: мм: сс».
let userSeconds = prompt('Введіть секнди: ', 0);

function tranformFromSec(secUser) {
    let hour = Math.trunc(secUser / 3600);
    let min = Math.trunc((secUser - hour * 3600) / 60);
    let secN = secUser - hour * 3600 - min * 60;
    showTime(hour, min, secN);
}
tranformFromSec(userSeconds);

// 10. Написать функцию, которая считает разницу между датами.Функция принимает 6 
// параметров, которые описывают 2 даты, и возвращает результат в виде строки 
// «чч: мм: сс».При выполнении задания используйте функции из предыдущих 2 - х заданий: 
// сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу 
// переведите обратно в «чч: мм: сс»

let userData1 = prompt("Введіть час в першої дати (гг.хх.сс): 00.00.00");
let userData2 = prompt("Введіть час в другої дати (гг.хх.сс): 00.00.00");
//Перетворюєм час у масив.
userData1 = userData1.split('.');
userData2 = userData2.split('.');
// Функція різниці.
function getRiznucaData(hourData1, minData1, secData1, hourData2, minData2, secData2, ) {
    // перетворюєм введені години у секунди
    secTransData1 = tranformToSec(hourData1, minData1, secData1);
    secTransData2 = tranformToSec(hourData2, minData2, secData2);
    // повертаєм різницю.
    return Math.abs(secTransData1 - secTransData2);
}
//перетворюєм різницю і видаєм час.
tranformFromSec(getRiznucaData(userData1[0], userData1[1], userData1[2], userData2[0], userData2[1], userData2[2]));