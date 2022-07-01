function bmi() {
    let num1 = document.getElementById("chieucao").value;
    let num2 = document.getElementById("cannang").value;
    let bmi = num2 / Math.pow(num1,2);

if (bmi < 16) {
    alert ("gay do III")
    } else if ( bmi < 17)  {
    alert ("gay do II")
        } else if ( bmi < 18.5) {
    alert ("gay do I")
    } else if (bmi < 25) {
        alert ("binh thuong")
    } else if ( bmi < 30) {
        alert ("thua can")
    } else if (bmi < 35) {
        alert ("beo phi cap do I")
    } else if (bmi < 40) {
        alert ("beo phi cap do II")
    } else if (bmi > 40) {
        alert ("beo phi cap do III")
    }
}