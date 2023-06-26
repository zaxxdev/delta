function resetForm() {
    // Reset input fields
    document.getElementById("inputA").value = "0";
    document.getElementById("inputB").value = "0";
    document.getElementById("inputC").value = "0";
}

function calculateDelta() {
    const a = parseFloat(document.getElementById("inputA").value);
    const b = parseFloat(document.getElementById("inputB").value);
    const c = parseFloat(document.getElementById("inputC").value);
    const delta = b * b - 4 * a * c;

    if (delta > 0) {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.getElementById("result").innerHTML = "x₁ = " + x1 + ", x₂ = " + x2;
        document.getElementById("result").className = "success";
    } else if (delta === 0) {
        const x = -b / (2 * a);
        document.getElementById("result").innerHTML = "x = " + x;
        document.getElementById("result").className = "success";
    } else {
        document.getElementById("result").innerHTML = "Brak pierwiastków rzeczywistych";
        document.getElementById("result").className = "warning";
    }
}