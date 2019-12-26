let arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
let ammountNumbers = 0;
let check
for (let i = 0; i < arr.length; i++) {
    check = arr[i] * 2;
    if (isNaN(check)) {} else {
        ammountNumbers = ammountNumbers + +arr[i];
    };
}
alert('ammount of numers = ' + ammountNumbers)