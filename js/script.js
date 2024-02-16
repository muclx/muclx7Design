const buttons = document.querySelectorAll('.nav-items > .box > a');

const ToggleButton = (event) => {
    const clickedButton = event.target;
    if (!clickedButton.classList.contains('active')) {
        buttons.forEach(button => button.classList.remove('active'));
        clickedButton.classList.add('active');
    }
}

buttons.forEach(button => button.addEventListener('click', ToggleButton));
