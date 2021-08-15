let arrPeople = [1, 2, 3, 4, 5, 6, 7, 8, 9];
localStorage.setItem("arr", JSON.stringify(arrPeople));
let arr = localStorage.getItem("arr");
let arrParsed = JSON.parse(arr);
arrParsed.map((i) => console.log(i));