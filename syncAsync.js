function myApp() {
    var age = 30;
    if (age > 18) {
    console. log ("Let's go drinking.");
    } else {
    console. log ("Go home, you are underaged.");
    }
}
myApp();
setTimeout ( () => {
    console. log ("Test Statement 1");
}, 2000) ;
console. log ("Test Statement 2");