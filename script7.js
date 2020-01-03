/*7.	Создайте объект dates для хранения дат. 
Первая дата – текущая, new Date. Вторая дата – 
текущая дата минус 365 дней. Из prompt читается
дата в формате yyyy-MM-dd. Проверьте, попадает 
ли введенная дата в диапазон дат объекта 
dates.*/
let date = new Date();
alert(date);
monthName = date.getDay();
alert(monthName);

let yearAgo = date - 365;
alert(yearAgo);

// let person = {
//   date: date,
// }