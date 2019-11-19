for (var i = 1; i <= 100; i++) {
    var numero = [i];

    var restoDivisioneTre = numero % 3;
    var restoDivisioneCinque = numero % 5;
    if (!restoDivisioneTre && !restoDivisioneCinque) {
        console.log("FizzBuzz");
    } else if (!restoDivisioneCinque) {
        console.log("Buzz");
    } else if (!restoDivisioneTre) {
        console.log("Fizz");
    } else {
        console.log(numero);
    }
}
