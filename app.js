// Defining Dropdown and filling it with data
const dropdown = document.querySelector('#dropdown');

for (let i = 3; i < 12; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    dropdown.append(option);
}

// All the variables
const P1Status = document.querySelector('#p1Point');
const P2Status = document.querySelector('#p2Point');
// Buttons Variable
const p1Button = document.querySelector('button.p1');
const p2Button = document.querySelector('button.p2');
const resetButton = document.querySelector('.reset');

let targetPoint = dropdown.selectedOptions[0].innerText;
let p1Point = parseInt(P1Status.innerText);
let p2Point = parseInt(P2Status.innerText);


// All the functions
function compare(target, compval) {
    return target == compval;
}

function disableButtons() {
    p1Button.disabled = true;
    p2Button.disabled = true;

    p1Button.style.opacity = '0.5';
    p2Button.style.opacity = '0.5';
}

function reset() {
    p1Point = 0;
    p2Point = 0;
    
    P1Status.innerText = p1Point;
    P2Status.innerText = p2Point;

    p1Button.disabled = false;
    p2Button.disabled = false;

    p1Button.style.opacity = '1';
    p2Button.style.opacity = '1';

    P1Status.style.color = 'black';
    P2Status.style.color = 'black';
}

// Adding Functionality to buttons
p1Button.addEventListener('click', function () {
    p1Point += 1;
    P1Status.innerText = `${p1Point}`
    let comp = compare(targetPoint, p1Point)
    
    if (comp) {
        disableButtons()
        P1Status.style.color = 'green';
        P2Status.style.color = 'red';
    }
})

p2Button.addEventListener('click', function () {
    p2Point += 1;
    P2Status.innerText = `${p2Point}`
    let comp = compare(targetPoint, p2Point)

    if (comp) {
        disableButtons()
        P1Status.style.color = 'red';
        P2Status.style.color = 'green';
    }
})

dropdown.addEventListener('input', function(){
    targetPoint = this.selectedOptions[0].innerText;
    reset()
})


resetButton.addEventListener('click', reset)
