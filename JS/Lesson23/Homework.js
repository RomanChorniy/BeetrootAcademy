// ДОМАШНЯ РОБОТА.

// 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.
let num = Number(prompt("Введіть початок діапазону", 0))
let over = Number(prompt("Введіть кінець діапазону", 0));
let sum = 0;

while (num <= over) {
    sum += num;
    num++;
}

console.log('Сума - ' + sum);

// 2. Запросить 2 числа и найти только наибольший общий делитель.
let numA = prompt("Введіть перше число", 0);
let numB = prompt("Введіть друге число", 0);
let znamenukAB = numB;

while ((numA % znamenukAB != 0) || (numB % znamenukAB != 0)) {
    znamenukAB--;
}

console.log(`Спільний дільник ${numA} та ${numB} - ${znamenukAB}`);

// 3. Запросить у пользователя число и вывести все делители этого числа.
let userNum = prompt('Введіть число', 0);
let vsiDilnyky = 'всі дільники - ';

for (let dilnyk = userNum; dilnyk > 0; dilnyk--) {
    if (userNum % dilnyk == 0) vsiDilnyky += dilnyk + ' ';
}

console.log(vsiDilnyky);

// 4. Определить количество цифр в введенном числе.
let clintNum = prompt('Введыть число.', 0);
let numPosition = 0;

while (true) {
    if (clintNum[numPosition] == undefined) break;
    numPosition++;
}

console.log(`Кількість цифр у числі ${clintNum} - ${numPosition}`);

// 5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел 
//положительных, отрицательных и нулей. При этом также посчитать, сколько 
// четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной 
// переменной (не 10) для ввода чисел пользователем.
let step = 1;
let numDodatni = 0;
let numVidemni = 0;
let numZero = 0;
let numParni = 0;
let numNeParni = 0;

for (; step <= 10; step++) {
    let checkNum = +prompt('Введіть число - ');
    console.log(checkNum);
    if (checkNum == 0) { numZero++; continue };
    checkNum > 0 ? numDodatni++ : numVidemni++;
    checkNum % 2 == 0 ? numParni++ : numNeParni++;
}

console.log(`Додатніх - ${numDodatni}; Відємних - ${numVidemni}; Нулів - ${numZero}; Парних - ${numParni}; Непарних - ${numNeParni};`);

// 6. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример,
//  вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор,
//   пока пользователь не откажется.
while (confirm('Бажаэте скористатися калькулятором')) {
    let calcNumA = +prompt('Введіть перше число.', 0);
    let calcSign = prompt('Вкажіть математичну дію ввівши її знак (+, -, *, /).', '');
    let calcNumB = +prompt('Введіть друге число.', 0);

    switch (calcSign) {
        case "+": {
            calcNumA += calcNumB;
            console.log(`Результат : ${calcNumA}`);
        };
            break;

        case "-": {
            calcNumA -= calcNumB;
            console.log(`Результат : ${calcNumA}`);
        };
            break;
        case "*": {
            calcNumA *= calcNumB;
            console.log(`Результат : ${calcNumA}`);
        };
            break;
        case "/": {
            calcNumA /= calcNumB;
            console.log(`Результат : ${calcNumA}`);
        };
            break;
    }
    alert(`Результат : ${calcNumA}`);
}

// 7. Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры 
// числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
let numTrue = prompt('Введіть число', 0);
let numStep = +prompt('На скільки перемістити цифри в числі?', 0);
let numMasiv = numTrue.split('');

for (let position = 0; position < numTrue.length; position++) {

    if (position < numStep)
        numMasiv[position + numTrue.length - numStep] = numTrue[position];

    else numMasiv[position - numStep] = numTrue[position];
}

console.log(numMasiv.join(''));

// 8. Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть 
// следующий день?» и так до тех пор, пока пользователь нажимает OK.
let dayWeek = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"]
let dayStep = 0;
do {
    console.log(`${dayWeek[dayStep]}. Хочете побачити наступний день?`);
    (dayStep != 6) ? dayStep++ : dayStep = 0;
} while (confirm(`${dayWeek[dayStep - 1]}. Хочете побачити наступний день?`));

// 9. Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить 
// на числа от 1 до 10.
for (let numTabA = 2; numTabA <= 9; numTabA++) {
    console.log(`Таблиця множення на ${numTabA}:`);
    for (let numTabB = 1; numTabB <= 10; numTabB++) {
        console.log(`${numTabA} x ${numTabB} = ${numTabA * numTabB}`);
    }
}
// 10. Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и 
// отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, 
// записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». 
// В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон 
// от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 
// 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не 
// выберет == N.
let middle = 50;
let masiv = [];
alert('Загадайте число від 0 до 100.')

for (let i = 0; i <= 100; i++) {
    masiv.push(i);
}

while (!confirm(`Ваше число ${masiv[middle]}?`)) {
    if (confirm(`Ваше число менше за ${masiv[middle]}?`)) {
        masiv.length = middle;
        middle = Math.floor(middle / 2);
    }
    else {
        masiv = masiv.reverse();
        masiv.length = middle;
        masiv = masiv.reverse();
        middle = Math.floor(middle / 2);
    }
}
console.log(`Ваше число ${masiv[middle]}.`)