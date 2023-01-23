


function add(num1, num2) {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    return parseFloat(num1) + parseFloat(num2);
}
function deduct(num1, num2) {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    return parseFloat(num1) - parseFloat(num2);
}
function mult(num1, num2) {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    return parseFloat(num1) * parseFloat(num2);
}
function div(num1, num2) {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    return parseFloat(num1) / parseFloat(num2);
}
function validation() {
    if (num1.value.length == 0 || num2.value.length == 0) {
        alert("inserta un numero");
        return false
    }
    else {
        return true
    }
}


var result;
result = document.getElementById("add").addEventListener("click", function () {
    if (validation() == true) {
        document.getElementById("result").innerHTML = (add(num1, num2))
    }
    else {
        document.getElementById("result").innerHTML = "Error. Introduce numeros correctos"
    }
});

result = document.getElementById("deduct").addEventListener("click", function () {
    if (validation() == true) {
        document.getElementById("result").innerHTML = (deduct(num1, num2))
    }
    else {
        document.getElementById("result").innerHTML = "Error. Introduce numeros correctos"
    }
});
result = document.getElementById("mult").addEventListener("click", function () {
    if (validation() == true) {
        document.getElementById("result").innerHTML = (mult(num1, num2))
    }
    else {
        document.getElementById("result").innerHTML = "Error. Introduce numeros correctos"
    }
});
result = document.getElementById("div").addEventListener("click", function () {
    if (validation() == true) {
        document.getElementById("result").innerHTML = (div(num1, num2))
    }
    else {
        document.getElementById("result").innerHTML = "Error. Introduce numeros correctos"
    }
});



