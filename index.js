// Задача 1.
// Реализуйте reverse(), которая принимает на вход массив и располагает элементы внутри него в обратном порядке. Решение этой задачи подразумевает самостоятельную реализацию функции без использования встроенного метода reverse().

// const names = ['john', 'smith', 'karl']; // ['john', 'smith', 'karl']


const names = ['john', 'smith', 'karl'];
let newNames = [];
function reverse(names){
for (let i = names.length - 1; i> -1; i--){
newNames.push(names[i]);
}
return newNames;
}
console.log(reverse(names));