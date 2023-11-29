

// 1.
// Робота з рядками:
// Напишіть функцію, яка перевертає заданий рядок.
// Створіть функцію, яка перевіряє, чи є заданий рядок паліндромом.

// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- CODE =>

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// let reversedString = reverseString('hello');
// console.log(reversedString);

// function isPalindrome(str) {
//     return str === reverseString(str);
// }

// const result = isPalindrome('level');
// console.log(result);

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// 2.
// Масиви:
// Напишіть функцію для знаходження найбільшого елемента в масиві чисел.
// Реалізуйте функцію для фільтрації парних чисел в масиві.

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- CODE =>

// function findMax(arr) {
//     return Math.max(...arr);
// }

// let numbers = [12, 33, 41, 2, 122, 55, 10];
// let maxNumber = findMax(numbers);
// console.log(maxNumber);

// function filterEvenNumbers(arr) {
//     return arr.filter(number => number % 2 === 0);
// }

// let evenNumbers = filterEvenNumbers(numbers);
// console.log(evenNumbers);

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// 3.
// Об'єкти:
// Створіть об'єкт, який представляє користувача з властивостями: ім'я, вік, електронна пошта.
// Додайте метод до об'єкта, який виводить повідомлення про користувача.

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-. CODE =>

// let user = {

//     name: "Danil",
//     age: 25,
//     email: "1998kylak@gmail.com",

//     sayHello: function() {
//     console.log(`Привіт, мене звати ${this.name}, мені ${this.age}, років! Моя електронна пошта : ${this.email}`)
//     }
// };

// user.sayHello();

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.

// 4.
// Цикли та умови:
// Напишіть цикл, який виводить парні числа від 1 до 10.
// Реалізуйте функцію, яка повертає суму всіх чисел від 1 до заданого числа.

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- CODE =>

// for (let i = 2; i <= 10; i += 2) {
//     console.log(i);
// }
// let sum = 0;

// function setSum(num) {
//     for (let i = 0; i < num.length; i++) {
//         sum += num[i];
//     }
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// setSum(numbers);
// console.log(sum);


// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
// 5.
// Обробка подій:
// Створіть кнопку в HTML і використовуйте JavaScript для додавання події при кліці на неї.
// Напишіть функцію, яка змінює колір фону елементу при наведенні миші.

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- CODE =>

// document.body.innerHTML += `<button id="myButton" class="btn" onclick="alert('Ви натиснули кнопку!')" onmouseover="changeColor(this)" onmouseout="restoreColor(this)">Натискай мене</button>`;

// function changeColor(element) {
//     element.style.backgroundColor = 'lightgreen';
// }

// function restoreColor(element) {
//     element.style.backgroundColor = '';
// }

// .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-