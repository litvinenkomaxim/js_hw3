// 2. Сгенерируйте массив из n случайных чисел с двумя знаками после запятой.
// Переберите массив и распечатайте в консоли значения его элементов, 
// возведенные в пятую степень, не используя функцию Math.pow().

let n = 25;
let arr = []
for (let i = 0; i < n; i++) {
    arr[i] = ((Math.random().toFixed(3)) * 10).toFixed(2);
    let arrSquared = 1;
    for (let k = 0; k < 5; k++) {
        arrSquared = arrSquared * arr[i];
    }
    console.log((i + 1) + '      ' + arr[i] + " в пятой степени = " + arrSquared)
}