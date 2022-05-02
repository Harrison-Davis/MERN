
// 1.

console.log(hello);                                   
var hello = 'world';                                 

// answer
var hello = "world";
console.log(hello)

world

// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// answer
var needle = 'haystack';
var needle = 'magnet';
test();
function test(){
    console.log(needle);
}

magnet



// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// answer
var brendan = 'super cool';
function print(){
    console.log(brendan);
}
console.log(brendan);


super cool


// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}


// answer

var food = 'chicken';
var food = 'gone';
console.log(food);
function eat(){
    food = 'half-chicken';
    console.log(food);
}

gone

// 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// answer
var food = "fish";
var mean = function() {
    food = "chicken";
    console.log(food);
    console.log(food);
}
mean();
console.log(food);
console.log(food);

chicken


// 6

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// answer
var genre = "disco";
var genre = "r&b";
console.log(genre);
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    console.log(genre);
}
console.log(genre);

rock

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// answer
var dojo = "burbank";
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    console.log(dojo);
}
console.log(dojo);


seattle


// 8 - Bonus ES6: const
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