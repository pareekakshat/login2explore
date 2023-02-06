const rollNoInput = document.getElementById("roll-no");
const fullNameInput = document.getElementById("full-name");
const classInput = document.getElementById("class");
const birthDateInput = document.getElementById("birth-date");
const addressInput = document.getElementById("address");
const enrollmentDateInput = document.getElementById("enrollment-date");
const saveButton = document.getElementById("save-button");
const updateButton = document.getElementById("update-button");
const resetButton = document.getElementById("reset-button");

// Disable all inputs and buttons except the primary key input (rollNoInput)
fullNameInput.disabled = true;
classInput.disabled = true;
birthDateInput.disabled = true;
addressInput.disabled = true;
enrollmentDateInput.disabled = true;
saveButton.disabled = true;
updateButton.disabled = true;
resetButton.disabled = true;

rollNoInput.addEventListener("input", function(event) {
  const rollNo = event.target.value;
  // Check if the rollNo exists in the database
  const student = findStudentInDatabase(rollNo);
  if (student) {
    // If the rollNo exists, display the student's data in the form and enable the update and reset buttons
    fullNameInput.value = student.fullName;
    classInput.value = student.class;
    birthDateInput.value = student.birthDate;
    addressInput.value = student.address;
    enrollmentDateInput.value = student.enrollmentDate;
    fullNameInput.disabled = false;
    classInput.disabled = false;
    birthDateInput.disabled = false;
    addressInput.disabled = false;
    enrollmentDateInput.disabled = false;
    updateButton.disabled = false;
    resetButton.disabled = false;
  } else {
    // If the rollNo does not exist, clear the form and enable the save and reset buttons
    fullNameInput.value = "";
    classInput.value = "";
    birthDateInput.value = "";
    addressInput.value = "";
    enrollmentDateInput.value = "";
    fullNameInput.disabled = false;
    classInput.disabled = false;
    birthDateInput.disabled = false;
    addressInput.disabled = false;
    enrollmentDateInput.disabled = false;
    saveButton.disabled = false;
    resetButton.disabled = false;
  }
});

saveButton.addEventListener("click", function(event) {
  event.preventDefault();
  // Validate the form data
  if (!rollNoInput.value || !fullNameInput.value || !classInput.value || !birthDateInput.value || !addressInput.value || !enrollmentDateInput.value) {
    alert("All fields are required");
    return;
  }
  // Save the form data to the database
  const student = {
    rollNo: rollNoInput.value,
    fullName: fullNameInput.value,
    class: classInput.value,
    birthDate: birthDateInput.value,
    address: addressInput.value,
    enrollmentDate: enrollmentDateInput.value,
}
