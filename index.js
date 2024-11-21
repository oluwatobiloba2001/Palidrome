const input = document.getElementById('input');

let reverseString = (str) => {
    return str.split('').reverse().join('')
}

let check = () => {
    const value = input.value
    const reverse = reverseString(value)


    if (value === reverse) {
        alert("PALIDROME")
    } else{
        alert('Try again')
}
input.value = '';
}
