// TASK #1============================================================================
// Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і два числа (first и second) – порядкові номери елементів масиву, які необхідно скласти. Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.Функція повинна генерувати винятки, якщо були введені не числа, і коли одне з чисел або обидва більшого розміру за довжину масиву. Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.

// https://www.cyberforum.ru/javascript/thread2651400.html

// SOLUTION

// function sumSliceArray(arr, first, second) {
//   //   if (typeof first !== "number" || typeof second !== "number") {
//   //     throw new Error("Будь ласка вводьте лише числа");
//   //   }                                                      // Використаєм, якщо самостійно в коді дамо значення змінним first та second
//   if (first >= arr.length || second >= arr.length) {
//     throw new Error(
//       "Один із індексів елемента знаходиться за межами розміру массива"
//     );
//   }
//   if (first < 0 || second < 0) {
//     throw new Error("Вводьте тільки позитивні числа");
//   }
//   if (isNaN(first) || isNaN(second)) {
//     console.log(first);
//     console.log(second);
//     throw new Error("Ви повинні вводити лише числа");
//   }
//   if (!Number.isInteger(first) || !Number.isInteger(second)) {
//     throw new Error("Вводити можна тыльки цілі числа");
//   }
//   return arr[first] + arr[second];
// }

// try {
//   const array = [2, 4, 9, 1, 10, 43, 13];
//   console.log(array);
//   const first = +prompt("Введіть індекс першого елемента"); // Як перевірити чи prompt не пустий?
//   const second = +prompt("Введіть індекс другого елемента"); // Як перевірити чи prompt не пустий?
//   const result = sumSliceArray(array, first, second);
//   console.log(
//     "Введений перший індекс елемента:",
//     first,
//     "Значення:",
//     array[first]
//   );
//   console.log(
//     "Введений другий індекс елемента:",
//     second,
//     "Значення:",
//     array[second]
//   );
//   console.log("Сума двох елементів:", result);
// } catch (error) {
//   console.log("Виникла помилка:", error.message);
// }

// TASK #2============================================================================
// Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус (адмін, модератор, користувач) та генерує модальне вікно з помилкою, якщо:вік користувача менше 18 або більше 70 років (генерується помилка типу RangeError).користувач не ввів жодних даних в будь-якому полі (виводиться повідомлення The field is empty! Please enter your age з типом помилки Error). У полі статус введено неправильне слово (тип помилки EvalError).в полі вік введено нечислове значення. У всіх інших випадках користувач отримає доступ до перегляду фільму. У блоці catch передбачена можливість виведення назви та опису помилки.

// SOLUTION
// function checkAge() {
//   try {
//     const name = prompt("Please enter your name:");
//     const age = prompt("Please enter your age:");
//     const status = prompt("Please enter your status (admin, moderator, user):");

//     if (age === "" || name === "" || status === "") {
//       //!age.trim()
//       throw new Error(
//         "One(all) of the field(s) is empty! Please enter value in each field."
//       );
//     }
//     if (!isNaN(name)) {
//       throw new Error("Invalid name value! Please enter your name.");
//     }

//     const numAge = Number(age);
//     if (isNaN(numAge)) {
//       throw new TypeError("Invalid age value! Please enter a number.");
//     }

//     if (numAge < 18 || numAge > 70) {
//       throw new RangeError("Age out of range! Must be between 18 and 70.");
//     }

//     if (status !== "admin" && status !== "moderator" && status !== "user") {
//       throw new EvalError(
//         "Invalid status! Please enter 'admin', 'moderator', or 'user'."
//       );
//     }

//     alert("You have access to watch the movie!");
//   } catch (error) {
//     alert(`Error: ${error.name}\nDescription: ${error.message}`);
//   }
// }

// checkAge();

// TASK #3============================================================================
// Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і висота прямокутника height і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.

// function calcRectangleArea(width, height) {
//   if (width === "" || height === "") {
//     throw new Error("You should enter some number(s) in the field(s).");
//   }
//   if (isNaN(width) || isNaN(height)) {
//     throw new Error("Enter only numbers!");
//   }
//   if (width <= 0 || height <= 0) {
//     throw new Error("Invalid data! Please, enter only positive number.");
//   }
//   return width * height;
// }

// try {
//   const width = prompt("Enter width of rectangle");
//   const height = prompt("Enter height of rectangle");
//   const result = calcRectangleArea(width, height);
//   alert(`The rectangle area is: ${result}`);
// } catch (error) {
//   alert(`Error: ${error.name}\nDescription: ${error.message}`);
// }

// TASK #4============================================================================
// Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням MonthException.
// Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. Функція повертає назву місяця відповідно до введеного номера місяця. У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням Incorrect month number.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
// Приклад роботи програми:
// console.log(showMonthName(5));
// May
// console.log(showMonthName(14));
// MonthException Incorrect month number

// SOLUTION
// class MonthException {
//   constructor(message) {
//     this.name = "MonthException";
//     this.message = message;
//   }
// }

// function showMonthName(month) {
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   if (month < 1 || month > 12) {
//     throw new MonthException("Incorrect month number");
//   }

//   return months[month - 1];
// }

// try {
//   console.log(showMonthName(5)); // Output: May
//   console.log(showMonthName(14));
// } catch (error) {
//   console.log(`${error.name} ${error.message}`);
// }

// TASK #5
// Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id. Також функція викидає помилку у разі якщо введено від’ємне id.
// Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність, в разі виключної ситуації виводить повідомлення про помилку. Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.

// Приклад роботи програми:
// showUsers([7, -12, 44, 22]);
// Error: ID must not be negative: -12
// [ {id: 7}, {id: 44}, {id: 22} ]

// function showUser(id) {
//   if (id < 0) {
//     throw new Error("ID must not be negative: " + id);
//   }
//   return { id: id };
// }

// function showUsers(ids) {
//   const validUsersId = [];

//   for (const id of ids) {
//     try {
//       const user = showUser(id);
//       validUsersId.push(user);
//     } catch (error) {
//       console.error(error.message);
//     }
//   }
//   return validUsersId;
// }

// const users = showUsers([7, -12, 44, 22]);
// console.log(users);
