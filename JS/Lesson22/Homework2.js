// ДОМАШНЯ РОБОТА.

// 1. Запросить у пользователя его возраст и определить, кем он является: ребенком(0–2), подростком(12–18), взрослым(18_60) или пенсионером(60– ...).
let userAge = prompt("Cкільки вам років", 0);
let message = (userAge <= 12) ? "дитина" :
    (userAge <= 18) ? "підліток" :
        (userAge <= 60) ? "дорослий" : "пенісонер";

console.log('Ви є ' + message);
alert('Ви є ' + message);

// 2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише(1–!, 2–@, 3–# и т.д).
let num = prompt("Введіть число від 0 до 9.", 0);
let message1 = (num == 1) ? "!" :
    (num == 2) ? "@" :
        (num == 3) ? "#" :
            (num == 4) ? "$" :
                (num == 5) ? "%" :
                    (num == 6) ? "^" :
                        (num == 7) ? "&" :
                            (num == 8) ? "*" :
                                (num == 9) ? "(" : ")";

console.log('Спецсимвол - ' + message1);
alert('Спецсимвол - ' + message1);

// 3. Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
let num = prompt("Введіть трьох значне число", 0);
if (num[0] == num[1] || num[0] == num[2] || num[1] == num[2]) { message = "є цифри що повторюються"; }
else { message = "немає цифр що повторються"; };

console.log('У даному числі ' + message);
alert('У даному числі ' + message);

// 4. Запросить у пользователя год и проверить, високосный он или нет.Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
let year = prompt("Введіть рік", 0);
let message = ((+year % 400 == 0) || (+year % 4 == 0) && (+year % 100 != 0)) ? "Рік високосний" : "Рік не високосний";

console.log(message);
alert(message);
// 5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
let num5 = prompt("Введіть пятизначне число", 0);
let message = (num5[0] == num5[4] && num5[1] == num5[3]) ? "поліндром" : "не поліндром";

console.log(message);
alert(message);

// 6. Написать конвертор валют.Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
let dol = prompt("Введіть суму (дол.)", 0);
let result = confirm('Хочете купити EUR') ? dol * 0.9 :
    confirm('Хочете купити UAH') ? dol * 27.01 :
        confirm('Хочете купити AZN') ? dol * 1.7 : 'не міняти валюту';

console.log(result);
alert(result);

// 7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3 %, от 300 до 500 – 5 %, от 500 и выше – 7 %.
let priceTotal = prompt("Введіть суму покупки (грн.)", 0);
let message = (priceTotal >= 200) && (priceTotal < 300) ? priceTotal * 0.97 :
    (priceTotal >= 300) && (priceTotal < 500) ? priceTotal * 0.95 :
        (priceTotal >= 500) ? priceTotal * 0.93 : priceTotal;

console.log(`Сума до оплати ${message} грн.`);
alert(`Сума до оплати ${message} грн.`);

// 8. Запросить у пользователя длину окружности и периметр квадрата.Определить, может ли такая окружность поместиться в указанный квадрат.
let lCircle = prompt("Введіть довжину кола. (см)", 0);
let perSquare = prompt("Введіть периметр квадрата. (см)", 0);
let message = (lCircle / Math.PI) <= (perSquare / 4) ? 'Так поміститься' : 'Ні не поміститься'

console.log(message);
alert(message);

// 9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа.За каждый правильный ответ начисляется 2 балла.После вопросов выведите пользователю количество набранных баллов.
let result = 0;
if (prompt("ВИБЕРІТЬ ПРАВИЛЬНИЙ ВАРІАНТ ВІДПОВІДІ. Як називаэться столиця Туреччини? 1. Алжир. 2. Стамбул 3. Анкара", 0) == 3) result += 2;
if (prompt("ВИБЕРІТЬ ПРАВИЛЬНИЙ ВАРІАНТ ВІДПОВІДІ. Як називаэться столиця Греції? 1. Афіни. 2. Спарта 3. Олімп", 0) == 1) result += 2;
if (prompt("ВИБЕРІТЬ ПРАВИЛЬНИЙ ВАРІАНТ ВІДПОВІДІ. Як називаэться столиця Того? 1. Антанаріву. 2. Того 3. Ломо", 0) == 3) result += 2;

console.log(`Кількість набраних балів: ${result}.`);
alert(`Кількість набраних балів: ${result}.`);

// 10. Запросить дату(день, месяц, год) и вывести следующую за ней дату.Учтите возможность перехода на следующий месяц, год, а также високосный год.
let dayUser = prompt("Введіть дату в такому форматі. (31.12.2020)", "00.00.0000");
let day = dayUser[0] + dayUser[1];
let mounth = dayUser[3] + dayUser[4];
let year = dayUser[6] + dayUser[7] + dayUser[8] + dayUser[9];
let yearV = (+year % 400 == 0) || (+year % 4 == 0) && (+year % 100 != 0) ? true : false;
if (day == 31 && mounth == 12) ++year;
if (day < 28) ++day
else if (day == 28 && yearV) ++day
else if (day < 30 && mounth == 2 && mounth == 6 && mounth == 9 && mounth == 11) ++day
else if (day < 31 && mounth != 2 && mounth != 6 && mounth != 9 && mounth != 11) ++day
else day = "01";
if (mounth < 12 && day == "01") ++mounth;
else if (mounth == 12) mounth = "01";

console.log(`Кількість набраних балів: ${day}.${mounth}.${year}.`);
alert(`Кількість набраних балів: ${day}.${mounth}.${year}.`);