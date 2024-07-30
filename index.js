//мінімум
//перше завдання
let numberOne = 0.1;
let numberTwo = 0.2;

let resultOfAdding = numberOne + numberTwo;
console.log(resultOfAdding);

//друге завдання
let firstValue = '1';
let secondValue = 2;

let sumOfValues = Number(firstValue) + 2;
console.log(sumOfValues);

//третє завдання 
let userCapacity = prompt("Введить розмір вашої флешки");
let gbInMb = userCapacity * 1024;
let fileAmount = gbInMb / 820;

alert(`${Math.floor(fileAmount)} файлів ви можете зберегти!`)

//норма
//перше завдання
let sum = prompt("Enter how much money you have");
let price = prompt("Enter how much one chocolate costs");
let result = sum / price;
let leftMoney = sum % price;
alert(`You can buy ${Math.floor(result)} chocolates and you have ${leftMoney} dollars!`);

//друге завдання 
let userNumbers = prompt("Enter three random numbers");
let reversedNumbers = 0;

while (userNumbers !== 0) {
    reversedNumbers = reversedNumbers * 10 + userNumbers % 10;
    userNumbers = Math.floor(userNumbers / 10);
    alert(`Here you are: ${reversedNumbers}`);
}


//максимум
друге завдання 
2 && 0 && 3 поверне 0
2 || 0 || 3 поверне 2
