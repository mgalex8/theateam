// 1. Займёмся арифметикой
// 1.1
console.log(((80/2)-4)/3*2);
// 1.2
	console.log(( 9 + 1 ) + (( 1 - ( 2017 % 2 )) * 6));
// 1.3
	console.log((1+2+2*2+2*2*2)*5);
// 2. Строки
// 2.1
	console.log('Hello' + ' ' + 'javascript');
// 2.2
	console.log('quick brown fox jumped over lazy dog'.indexOf('j'));
// 2.3
	console.log('Goodbye javascript'.replace('Goodbye', 'Hello'));
// 2.4
	console.log('mississippi'.replace(/i/g, '!'));
// 3. Переменные
// 3.1
 let red = 10,
		 blue = 20,
		 yellow = 40,
		 purple = blue + red,
		 green = yellow + blue,
		 orange = yellow + red,
		 black = green + orange + purple;
	console.log(black);
// 3.2
	let hello = 'Привет',
			goodbye = 'Пока',
			name = 'Пётр';
		console.log(hello + ', ' + name + '. ' + goodbye + ', ' + name + '.');
// 4. Функции
// 4.1
	function second(total) {
		return total % 60;
	}
// 4.2
	function perimeter(side, count) {
		return side * count;
	}
	console.log(perimeter(10,5));
// 4.3
	function pedestrianFlowRate(cycleLength, trafficLength, turningLength) {
		let time = cycleLength - (trafficLength + turningLength);
		return (time / cycleLength) * 100;
	}
	console.log(pedestrianFlowRate(100,40,23));
// 5. Ветвление
// 5.1
	function fizzbuzz(number) {  
		if ((number%3 == 0) && number%5 == 0) {
			return 'FizzBuzz';
		}
		if (number%3 == 0) {
			return 'Fizz';
		} 
		if (number%5 == 0) {
			return 'Buzz';
		}
		else {
			return number;
		}

	}
	console.log(fizzbuzz(15));
// 5.2
	function iGoToNorth(number) {
		if (number > 10 && number < 30 && number % 7 == 0) {
			return 'yes';
		}
		else {
			return 'no';
		}
	}	
	console.log(iGoToNorth(22));
// 6. Циклы
// 6.1
console.log(((80/2)-4)/3*2);
// 6.2
	console.log(( 9 + 1 ) + (( 1 - ( 2017 % 2 )) * 6));
// 6.3
	console.log((1+2+2*2+2*2*2)*5);