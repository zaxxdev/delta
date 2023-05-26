
function resetForm() {
    // Reset input fields
    document.getElementById("inputA").value = "0";
    document.getElementById("inputB").value = "0";
    document.getElementById("inputC").value = "0";
}
function calculateDelta() {
    var a = parseFloat(document.getElementById("inputA").value);
    var b = parseFloat(document.getElementById("inputB").value);
    var c = parseFloat(document.getElementById("inputC").value);
    var delta = b * b - 4 * a * c;

    if (delta > 0) {
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.getElementById("result").innerHTML = "x₁ = " + x1 + ", x₂ = " + x2;
        document.getElementById("result").className = "success";
    } else if (delta === 0) {
        var x = -b / (2 * a);
        document.getElementById("result").innerHTML = "x = " + x;
        document.getElementById("result").className = "success";
    } else {
        document.getElementById("result").innerHTML = "Brak pierwiastków rzeczywistych";
        document.getElementById("result").className = "warning";
    }
}