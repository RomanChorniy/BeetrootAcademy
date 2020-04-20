// ДОМАШНЯ РОБОТА.

// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя 
// скорость), и следующие функции для работы с этим объектом: Функция для вывода на экран 
// информации об автомобиле; Функция для подсчета необходимого времени для преодоления 
// переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги 
// водителю необходимо делать перерыв на 1 час.
let car = {
    maker: 'Germany',
    model: 'Audi',
    year: 1994,
    speedA: 120
};
let userDistance = prompt('Введть відстань (км.): ', 0);

function showInormation(obj) {
    console.log(obj)
};
function getDriveTime(distance, speed) {
    let timeTravel = (Math.round(distance / speed * 100) / 100);
    if (timeTravel > 4) timeTravel += Math.trunc(timeTravel / 4)
    return timeTravel;
}
showInormation(car);
console.log(getDriveTime(userDistance, car.speedA) + " год.");

// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие 
// функции для работы с этим объектом: 
let dribA = {
    chuselnyk: null,
    znamenyk: null
}
let dribB = Object.assign({}, dribA);
for (key in dribA) {
    dribA[key] = +prompt(`Ведіть ${key} дробу.`)
}
for (key in dribB) {
    dribB[key] = +prompt(`Ведіть ${key} дробу.`)
}

// - Функция сложения 2-х объектов-дробей;
function getSymaDrib(drib1, drib2) {
    let dribSuma = {};
    for (key in drib1) {
        dribSuma[key] = drib1[key] + drib2[key];
    };
    return dribSuma;
}

getSymaDrib(dribA, dribB);

// - Функция вычитания 2-х объектов-дробей;
function getOddsDrib(drib1, drib2) {
    let dribOdds = {};
    for (key in drib1) {
        dribOdds[key] = drib1[key] - drib2[key];
    };
    return dribOdds;
}

getOddsDrib(dribA, dribB);

// - Функция умножения 2-х объектов-дробей;
function getProductDrib(drib1, drib2) {
    let dribProduct = {};
    for (key in drib1) {
        dribProduct[key] = drib1[key] * drib2[key];
    };
    return dribProduct;
}

getProductDrib(dribA, dribB);

// - Функция деления 2-х объектов-дробей;
function getDivisiontDrib(drib1, drib2) {
    let dribDivision = {};
    dribDivision.chuselnyk = drib1.chuselnyk * drib2.znamenyk;
    dribDivision.znamenyk = drib1.znamenyk * drib2.chuselnyk;
    return dribDivision;
}

getDivisiontDrib(dribA, dribB);

// - Функция сокращения объекта-дроби.
function getDilnyk(drib) {
    let dilnyk = drib.chuselnyk;
    while ((drib.chuselnyk % dilnyk != 0) || (drib.znamenyk % dilnyk != 0)) {
        dilnyk--;
    }
    return dilnyk;
}
function getReductionDrib(drib) {
    let dribReduction = {};

    for (key in drib) {
        dribReduction[key] = drib[key] / getDilnyk(drib);
    };

    return dribReduction;
}

getReductionDrib(dribA);

// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции 
// для работы с этим объектом:
let userTime = {
    hour: 14,
    min: 45,
    sec: 30
}
// Функция вывода времени на экран;
function showTime(time) {
    console.log(`Годинник : ${time.hour}:${time.min}:${time.sec}.`);
}
// Функция изменения времени на переданное количество секунд;
function mathSec(time, sec) {
    let timeNew = toSec(time) + sec;
    return fromSec(timeNew);
}

function toSec(time) {
    let onlySec = time.sec + time.min * 60 + time.hour * 3600;
    return onlySec;
}

function fromSec(time) {
    let trueTime = {
        hour: Math.trunc(time / 3600),
        min: Math.trunc((time - Math.trunc(time / 3600) * 3600) / 60),
        sec: time - Math.trunc(time / 3600) * 3600 - Math.trunc((time - Math.trunc(time / 3600) * 3600) / 60) * 60
    }
    // обнулення години при досяганні значеннях відмітки 24.
    trueTime.hour = trueTime.hour - 24 * Math.trunc(trueTime.hour / 24);
    return trueTime;
}


// Функция изменения времени на переданное количество минут;
function mathMin(time, min) {
    let timeNew = toSec(time) + min * 60;
    return fromSec(timeNew);
}
// Функция изменения времени на переданное количество часов.
function mathHour(time, hour) {
    let timeNew = toSec(time) + hour * 3600;
    return fromSec(timeNew);
}