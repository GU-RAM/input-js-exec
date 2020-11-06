

const inputs = document.querySelectorAll('.quantity');
const submitBtn = document.querySelector('.btn');

inputs.forEach((input, index) => {
    let findElementToFocus = 0;

    input.addEventListener('paste', (event) => {
        let paste = (event.clipboardData || window.clipboardData).getData('text');
        if (!isNaN(paste)) {
            let array = paste.toString().split("");

            for (let i = 0; i < array.length; i++) {
                if (array[i] >= 0 && array[i] < 10 && index + i < 6) {
                    // By using index find active element to start and then add following inputs
                    inputs[(i + index)].value = array[i];
                    findElementToFocus = (i + index);
                } else {
                    break;
                }
            }
            findElementToFocus < 5 ? inputs[findElementToFocus + 1].focus() : null;
        }
        event.preventDefault();

        checkInputsValue();
    })
})

// ckeck if every input has some number written in it to click submit button
function checkInputsValue() {
    let checkInputIfEmtpy = false;
    inputs.forEach(input => {
        if (!input.value) {
            return checkInputIfEmtpy = true;
        }
    })
    checkInputIfEmtpy ? null : submitBtn.click();
}
