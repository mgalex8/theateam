// 1. Числа     ----------------------------

// 1.1 На курсах по изучению javascript занималось 80 студентов. Половина студентов дошла до выполнения финального проекта.
// Из них четверо свой проект сдать не смогли. Третья часть сдавших студентов сдала свой проект на 100%.
// Составьте выражение, вычисляющее количество студентов, сдавших свой проект не на 100%.

//80/2 = 40 - студентов дошло до финального проекта
// 40 - 4 = 36 студетнов сдали проект
// 36/3 = 12 - студентов сдали на 100 процентов
// 36-12 = 24 - студентов сдали не на 100 проц
console.log((80 / 2 - 4) - (80 / 2 - 4) / 3);

// 1.2 Немного «астрологии». Напишите выражение, которое складывает день и месяц даты и добавляет 6, если год — чётный.
// Вместо произвольной даты (мы же ещё не дошли до переменных), используйте 9.1.2017 (девятое января).

// Если год нечетный 2017%2 = 1; (1-1)*6 = 0
// Если год четный 2018%2 = 0; (1-0)*6 = 6
console.log((1 + 9) + (1 - ( 2017 % 2))*6);

// 1.3 Работник пришёл к хозяину получить премию. И попросил сущую мелочь: несколько арбузов, чтобы расположить по
// сторонам света вокруг своего дома. Чтобы на восток у него был один арбуз, на север — в два раза больше чем на восток
// и так далее, пока стороны света не кончатся. Всего сторон света — четыре. Выбраны были арбузы весом по 5 кг.
// Сколько будет весить мешок, который загрузят этими арбузами? Запишите выражение.

//восток - 1
// север - 2
// юг - 2*2 = 4
// запад 4*2 = 8
// Всего: 1 + 2 + 4 + 8 = 15
// Вес = 15*5 = 75кг
console.log((1 + 1*2 + 2*2 + 4*2)*5);
console.log(2018%2);


// 2. Строки     ----------------------------

// 2.1 Перво-наперво, сложим две строки: 'Hello ' и 'javascript'. Для сложения воспользуемся операцией соединения строк: +.

console.log('Hello ' + 'javascript');

// 2.2 Получите индекс буквы j в фразе quick brown fox jumped over lazy dog, используя метод строки indexOf.

console.log('quick brown fox jumped over lazy dog'.indexOf('j'));

// 2.3 Получите из строки 'Goodbye javascript' строку 'Hello javascript', используя метод replace.

console.log('Goodbye javascript'.replace('Goodbye', 'Hello'));

// 2.4 Ещё одно упражнение на метод replace: замените все вхождения буквы i в строке 'mississippi' на символ ! (восклицательный знак).

console.log('mississippi'.replace(/i/g, '!'));


// 3. Переменные     ----------------------------

// 3.1 В коробке лежит 10 красных фишек, 20 синих и 40 жёлтых. Фиолетовых фишек столько, сколько синих и красных вместе.
// Зелёных столько, сколько жёлтых и синих. Оранжевых столько, сколько жёлтых и красных.
// Посчитайте количество чёрных фишек, если оно равно сумме количества зелёных, оранжевых и фиолетовых фишек.

var redChip = 10,
    blueChip = 20,
    yellowChip = 40,
    purpleChip = redChip + blueChip,
    greenChip = yellowChip + blueChip,
    orangeChip = yellowChip + redChip,
    blackChip = greenChip + orangeChip + purpleChip;

console.log(blackChip);

// 3.2 Объявите две переменные hello и goodbye, сразу же проинициализируйте их значениями.
// Объявите и проинициализируйте переменную name значением 'Пётр'. Используя переменные, составьте
// строку 'Привет, Пётр. Пока, Пётр.'. В выражении можно использовать дополнительную строку из одного пробела.
// А можно обойтись без неё ;)

var hello = 'Привет, ',
    goodbye = ' Пока, ',
    name = 'Пётр',
    dot = '.',
    greeting = hello + name + dot + goodbye + name;

console.log(greeting);


// 4. Функции     ----------------------------

// 4.1 Напишите функцию seconds, принимающую числовой параметр total и возвращающую остаток от деления числа total на 60.

var seconds = function (total) {
    return total%60
};

console.log(seconds(61));

// 4.2 Напишите функцию perimeter, подсчитывающую периметр правильного многоугольника.
// Первый параметр функции — side, длина стороны, второй параметр — count, количество сторон в многоугольнике.

var perimeter = function (side, count) {
    return side*count
};

console.log(perimeter(10,5));

// 4.3 Напишите функцию pedestrianFlowRate, которая определяет, сколько времени светофор, управляющий движением пешеходов,
// позволяет пешеходам проходить через дорогу. Первый параметр cycleLength — количество времени, в течение которого
// сигналы светофора полностью повторяются (можно засечь от одного загорания зелёного сигнала, до следующего).
// Второй параметр trafficLength — время, в течение которого движение пешеходов блокировано автотранспортом,
// едущим перпендикулярно пешеходному переходу. Третий параметр turningLength — время, в течение которого возможен
// проезд по пешеходному переходу транспорта, поворачивающего с параллельных направлений. Функция должна возвращать значение в процентах.

var pedestrianFlowRate = function(cycleLength, trafficLength, turningLength) {
    var pedestrianTime = cycleLength - (trafficLength + turningLength);
    return ((pedestrianTime * 100) / cycleLength).toFixed(2) + '%';
};

console.log(pedestrianFlowRate(90, 30, 25));


// 5. Ветвления     ----------------------------

// 5.1 Напишите функцию fizzbuzz, которая принимает параметр number и:
// Для чисел, кратных трём, возвращает 'Fizz'
// Для чисел, кратных пяти, возвращает 'Buzz'
// Для чисел, кратных пятнадцати (одновременно трём и пяти), возвращает 'FizzBuzz'
// В остальных случаях возвращает исходное число

var fizzbuzz = function (number) {
    if (((number % 3) === 0) && ((number % 5) === 0)) {
        return 'FizzBuzz'
    } else if ((number % 5) === 0) {
        return 'Buzz'
    } else if ((number % 3) === 0) {
        return 'Fizz'
    } else {
        return number
    }
};

console.log(fizzbuzz(9));

// 5.2 Напишите фунцию iGoToNorth, которая принимает параметр number и определяет, подходит ли нам переданное число.
// Число подходит если оно больше 10, меньше 30 и кратно 7.

var iGoToNorth = function(number) {
    if ((number > 10)&&(number < 30)&&(number % 7 === 0)) {
        return true
    } else {
        return false
    }
};

console.log(iGoToNorth(21));

// 6. Циклы     ----------------------------

// 6.1 Напишите функцию isPlain, определяющую, является ли переданное целое положительное число — простым.
// Функция будет принимать один параметр number и возвращать true, если число — простое и false, если число делится на
// другое целое число без остатка. Например, числа 2, 3 и 5 являются простыми, а 9, 12 и 40 — не являются.
// В решении используйте цикл for. Чтобы проверить, является ли число простым, достаточно проверить, делится ли оно на
// числа от 2 до половины number (включительно) без остатка.

var isPlain = function (number) {
      for (var i = 0; i <= number/2; i+=1 ) {
          if (number % i  === 0) {
              return false
          }
      }
    return true
};

console.log(isPlain(9));

// 6.2 Напишите функцию fib, получающую на вход положительное целое число и возвращающую число фибоначчи с указанным номером.
// (Первое и второе числа фибоначчи: 1, начиная с третьего, число фибоначчи равно сумме двух предыдущих чисел).
// Необходимо выполнить задание, используя цикл.
var fib = function (number) {
    var number1 = 1,
        number2 = 1;
    for (var i = 3; i <= number; i++) {
        var number3 = number1 + number2;
        number1 = number2;
        number2 = number3;
    }
    return number2;
};

console.log(fib(77));

// 6.3 Напишите функцию digitSumm, вычисляющую сумму цифр числа. Первый параметр функции — number. Для получения цифр используйте операцию получения остатка от деления %.

var digitSumm = function (number) {
    var total = 0;
    while(number > 0) {
        total += number%10;
        number = Math.floor(number/10);
    }
    return total
};

console.log(digitSumm(345));

//Через преобразование к строке:

var digitSum = function (number) {
    var str = number.toString();
    var total = 0;
    for (var i = 0; i < str.length; i++) {
        total += parseInt(str.charAt(i), 10);
    }
    return total;
};

console.log(digitSum(345));


// 7. Объекты     ----------------------------

// 7.1 Объявите переменную book и назначьте ей объект с именем (name) 'Программирование на Javascript' и типом (type) 'Book'.

var book = {
    name: 'Программирование на Javascript',
    type: 'Book'
};

console.log(book);

// 7.2 Напишите функцию isACat, которая определяет, является ли переданный объект котом. Объект является настоящим котом,
// если его имя — 'Garphield' или ему нравится молоко. Имя хранится в поле name. Что нравится объекту, хранится в строке, в поле likes.
// Объекту нравится молоко, если содержимое likes равно строке 'milk'.
var cat = {
    name: 'Garphield',
    likes: 'milk'
};

var notCat = {
    name: 'Johny Depp',
    likes: 'vine'
};
var isACat = function (obj) {
    if (obj.name === 'Garphield' && obj.likes === 'milk') {
        return true
    }
    return false
};

console.log(isACat(cat));
console.log(isACat(notCat));


// 8. Массивы     ----------------------------

// 8.1 Опишите массив array, содержащий все числа от 7 до 13 включительно в порядке возрастания.

var array = [7, 8, 9, 10, 11, 12, 13];
console.log(array);

// 8.2 Напишите функцию summ, принимающую параметр-массив и возвращающую сумму его значений.

var summ = function (arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
};

console.log(summ(array));

// 8.3 Напишите функцию evens, принимающую массив чисел и возвращающую массив только чётных чисел из исходного массива,
// в том порядке, в котором они находились в исходном массиве.

var evens = function (arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i])
        }
    }
    return result
};

console.log(evens([1,2,3,4,5,6]));

// 8.4 Напишите функцию, принимающую на вход два массива чисел и возвращающую массив, состоящий из массивов.
// Каждый элемент нового массива должен содержать в себе два числа — число из первого массива и число из второго.
//var combinations = function(a, b) { … }; // ваша функция
// combinations([1, 2, 3], [4, 5]);
// // => [[1, 4], [1, 5], [2, 4], [2, 5], [3, 4], [3, 5]];

var combinations = function (a, b) {
    var resultArr = [];
    for (var i = 0; i < a.length; i = i + 1) {
        for (var j = 0; j < b.length; j = j + 1) {
            resultArr.push([
                a[i],
                b[j]
            ]);
        }
    }
    return resultArr;
};

console.log(combinations([1, 2, 3], [4, 5]));

// 9. Строки, продолжение    ----------------------------

// 9.1 Соединим несколько строк, взяв строку 'Hello', и добавим к ней, последовательно,
// пробел, строку 'coding', пробел, 'in', пробел, 'javascript'. Для соединения строк используйте метод concat.

console.log('Hello'.concat(' ', 'coding', ' ', 'in', ' ', 'javascript'));

// 9.2 Из строки 'Coding in javascript' получите строку 'g in jav', используя метод substr.

console.log('Coding in javascript'.substr(5, 8));

// 9.3 Выполните задание 6, используя метод substring. Вероятно имеется в виду задание 2.

console.log('Coding in javascript'.substring(5, 13));


