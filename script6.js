// 6.	Сгенерируйте объект, описывающий модель телефона,
// заполнив все свойства значениями, прочитанными из 
// prompt (например: brand, model, resolution, color...), 
// не используя вспомогательные переменные. Добавьте этот 
// гаджет персоне, созданной ранее.

let person = {
  name: "John",
  age: 32,
  job: "worker"
};

let smartphone = {}
smartphone.brand = prompt("Введите бренд");
smartphone.model = prompt("Введите модель");
smartphone.resolution = prompt("Введите разрешение");
smartphone.color = prompt("Введите цвет");


Object.assign(person, smartphone);
console.log(smartphone);
console.log(person);