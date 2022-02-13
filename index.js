// Задача 2.
// Панграмма — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу. Например, предложение "The quick brown fox jumps over the lazy dog" является панграммой, поскольку в нем хотя бы один раз используются буквы от A до Z (регистр значения не имеет).
// Напишите функцию, которая возвращает true или false в зависимости от того, является она панграммой или нет. Не обращайте внимания на цифры и знаки препинания. Работаем только с латиницей.

// console.log(isPangram("The quick brown fox jumps over the lazy dog")) // true
// console.log(isPangram("This is not a pangram")) // false

let letters = 'abcdefghijklmnopqrstuywxyz'
function isPangrams(letter) {
for (let i = 0; i < letters.length; i++){
if(letter.indexOf(letters[i]) === -1){
return 'false';
}
}
return 'true';
}
console.log(isPangrams("The quick brown fox jumps over the lazy dog"));
console.log(isPangrams("This is not a pangram"))