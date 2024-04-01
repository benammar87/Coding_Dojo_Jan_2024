// example 1


console.log(hello);  //hello is not defined ==> output undefined
var hello = 'world';                                  
                                 

// example 2

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle); // output 'magnet'
}

// example 3

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan); //nothing output
}
console.log(brendan);// output 'super cool'


// example 4 

var food = 'chicken';
console.log(food); // output 'chicken'
eat();
function eat(){
    food = 'half-chicken';
    console.log(food); // output 'half-chicken'
    var food = 'gone';
}

// example 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food); // erreur

// example 6 
console.log(genre);//undefined 
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre); // output 'rock'
    var genre = "r&b";
    console.log(genre);// output 'r&b'
}
console.log(genre); // output 'disco'

// example 7 
dojo = "san jose";
console.log(dojo);// output 'san jose '
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo); // output 'seattle'
    var dojo = "burbank";
    console.log(dojo); // output ' burbank'
}
console.log(dojo); // output 'san jose'

// example 8 

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}













  
