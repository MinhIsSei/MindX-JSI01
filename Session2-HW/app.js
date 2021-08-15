// Init
let movies = ["Inception", "Forrest Gump","The Dark Knight","The Shawshank Redemption","Blade Runner"];
// Create
let newMovies = (element) => movies.push(element);
// Read
let readPosition = (i) =>console.log(movies[i]);
// Update
let movieTitles = []; 
let titles = (i) => movieTitles.push(i);
movieTitles.push(movies[0]);
let update = (i) => movieTitles.push(movies[i]);
// Delete
let delete1 = (i) => movies.splice(i, 1);
let deleteN = (i, n) => movies.splice(i, n);
// Read All
movies.map((i) => console.log(i));
for (let i = 0; i < movies.length/2; i ++){
    console.log(movies[i])
}
movies.map((i, n) => console.log(n + 1 + ". "  + i ));
// Update All
movies.map((i) => console.log(i.toLowerCase()));
// Purpose of While 
function userName() {
    let person = prompt("Please enter your name");
     if (person.length > 15) {
        alert("Your username is too long");
        prompt("Please enter your name");
  } else {
      alert("Good username");
  }
};

function spiderQuiz() {
    let spider = prompt("How many legs does a spider have?" +
    " 1. None" +
    " 2. 4 legs" + 
    " 3. 8 legs" +
    " 4. 12 legs" )
    if (isNaN(spider) == true) {
        alert("hahaha invalid");
    }
    while (spider >= '0' && spider <= '9')  {  
        if (spider == 3 ) {
            alert("Correct");
        } else {
            alert ("Incorrect");
        };
        break;
    }
}