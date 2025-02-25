const input = document.getElementById("input");


function reverseString(str) {

return str.split("").reverse().join("");

}

function checker() {

    const value = input.value;
    const reverse = reverseString(value);

    if (value === reverse) {
        alert(` ${reverse} \n P A L I N D R O M E`);
    } else {
        alert(` ${reverse}\n Not Palindome!`);
    }
}