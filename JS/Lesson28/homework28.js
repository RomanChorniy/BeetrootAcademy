// ДОМАШНЯ РОБОТА.

// 1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
let kolo = new Circle(5);

class Circle {
    constructor(radius) {
        this.radius = radius
    }
    get radiusValue() {
        return this.radius
    }
    get diamert() {
        return this.radius * 2
    }
    set newRadius(rad) {
        this.radius = rad;
        return console.log(this.radius);

    }
    square() {
        return 3.14 * Math.pow(this.radius, 2)
    }
    longitude() {
        return (2 * 3.14 * this.radius).toFixed(2);
    }
}
// Продемонстрировать работу свойств и методов.
console.log(`Radius = ${kolo.radiusValue} ;`);
kolo.newRadius = 50;
console.log(`Diametr = ${kolo.diamert} ;`);
console.log(`Square = ${kolo.square()} ;`);
console.log(`Longiyude = ${kolo.longitude()} ;`);


// 2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие 
// компоненты:
// - поле, которое хранит цвет маркера;
// - поле, которое хранит количество чернил в маркере (в процентах);
// -  метод для печати (метод принимает строку и выводит текст соответствующим цветом; 
// текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – 
// это 0,5% чернил в маркере).
class Marker {
    constructor(color) {
        this.color = color;
        this.inkTankFill = 100;
    }
    print(text) {
        // Рахую кількість букв в тексті:
        let bykvuYText = 0;
        for (let i = 0; i < text.length; i++) {
            if (text[i] !== " ") bykvuYText++;
        }
        // Друк тексту
        while (this.inkTankFill > (bykvuYText * 0.5)) {
            let textArr = `<span style="color: ${this.color};">${text}.</span>`;
            document.write(textArr);
            // Відраховую кількість затраченого чорнила на текс.
            this.inkTankFill -= bykvuYText * 0.5;
        }
    }
}

// - Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого
// маркера и добавив метод для заправки маркера.
class Multiple extends Marker {
    fillOver(value) {
        this.inkTankFill = value;
    }
}

// 3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.
// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка.
// Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью 
// метода getHtml().
// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().
class Employee {
    constructor(name, age, post, exp) {
        this.name = name;
        this.age = age;
        this.post = post;
        this.experience = exp;
    }
}
let bankEmp = [
    new Employee("Joe Black", 28, "IT-security", 4),
    new Employee("Shon Chi", 36, "manager", 15),
    new Employee("Paul Koma", 34, "assistant", 6),
    new Employee("Ann Marshal", 20, "assistant", 2),
    new Employee("Jane Ostine", 40, "credit", 9)
];
class EmpTable {
    constructor(employee) {
        this.employee = employee
    }
    getHtml() {
        document.write('<table border="1" cellspacing="0"><tr><th>Робітник</th><th>Вік</th><th>Посада</th><th>Стаж роботи</th></tr>');
        for (let pos of this.employee) { document.write(`<tr><td>${pos.name}</td><td>${pos.age}</td><td>${pos.post}</td><td>${pos.experience}</td></tr>`); }
        document.write('</table>');
    }
}

let empTab = new EmpTable(bankEmp);