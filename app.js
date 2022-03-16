const dropdown = document.querySelector('#dropdown');

for (let i = 3; i < 12; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    dropdown.append(option);
}

const targetPoint = dropdown.selectedOptions[0].innerText;

const P1Status = document.querySelector('#p1Point');
const P2Status = document.querySelector('#p2Point');
// Buttons Variable
const p1Button = document.querySelector('button.p1');
const p2Button = document.querySelector('button.p2');
const resetButton = document.querySelector('.reset');

let p1Point = parseInt(P1Status.innerText);
let p2Point = parseInt(P2Status.innerText);


// Adding Functionality to buttons
p1Button.addEventListener('click', () => {
    p1Point += 1;
    P1Status.innerText = `${p1Point}`
    compare()
})

p2Button.addEventListener('click', () => {
    p2Point += 1;
    P2Status.innerText = `${p2Point}`
    compare()
})

resetButton.addEventListener('click', () => {
    p1Point = 0;
    p2Point = 0;
    P1Status.innerText = p1Point;
    P2Status.innerText = p2Point;
})

function compare() {
    if (targetPoint == p1Point) {
        
    }
    else if (targetPoint == p2Point) {
        
    }
}