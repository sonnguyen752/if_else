function ibm() {
    let num1 = document.getElementById("chieucao").value;
    let num2 = document.getElementById("cannang").value;
    let ibm = num2 / Math.pow(num1,2);

if (ibm<=16) {
    alert ("gay do III")
    } else if (16<=ibm && ibm<17)  {
    alert ("gay do II")
        } else if (17<ibm && ibm<18.5) {
    alert ("gay do I")
}else 
alert ("ok")
console.log(ibm)
}