const nameInput = document.getElementById('inputname');
const dateInput = document.getElementById('yourdate'); // Corrected ID
const genderInputs = document.getElementsByName('gender');
const commentInput = document.getElementById('comment_form');
const sendButton = document.getElementById('send');
const output = document.getElementById('output');

function display(event) {
    event.preventDefault();

    const selectedGender = getSelectedGender();

    output.innerHTML = `
        Name: ${nameInput.value}<br>
        Date: ${dateInput.value}<br>
        Gender: ${selectedGender}<br>
        Comment: ${commentInput.value}
    `;
}

function getSelectedGender() {
    for (const genderInput of genderInputs) {
        if (genderInput.checked) {
            return genderInput.value;
        }
    }
    return "Not selected";
}

sendButton.addEventListener('click', display);
  