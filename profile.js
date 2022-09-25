const colorBtn = document.querySelector('#color');
const placeBtn = document.querySelector('#place');
const ritualBtn = document.querySelector('#ritual');

function color() {
    alert('And now my favorite color is blue (cue bass drop)')
}

colorBtn.addEventListener('click', color);

function place() {
    alert('The best place is Bath and Body Works')
}

placeBtn.addEventListener('click', place);

function ritual() {
    alert('I will be off all day if I skip my bedtime hedgehog ritual')
}

ritualBtn.addEventListener('click', ritual);