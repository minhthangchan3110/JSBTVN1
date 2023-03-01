function Diem_tb(...x){
var temp = 0;
for (var i=0; i < x.length; i++) {
    temp += x[i];
}
var avg = (temp/x.length);
if (avg < 70) {
    return console.log("Grade : D"); 
} else if (avg <= 80) {
    return console.log("Grade : C"); 
} else if (avg <= 90) {
    return console.log("Grade : B"); 
} else if (avg <= 100) {
    return console.log("Grade : A"); 
}
}
Diem_tb(63,87,79,32);