document.getElementById("submit-btn").addEventListener("click", function(event) {
    event.preventDefault();
    calculateAge();
});

function calculateAge() {
    var dobInput = document.getElementById("dob");
    var dob = new Date(dobInput.value);

    // Check if DOB is a valid date
    if (!dobInput.value || isNaN(dob.getTime())) {
        document.getElementById("result").innerText = "Please enter a valid date of birth.";
        return;
    }

    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    var yearsUntil70 = 70 - age;
    document.getElementById("result").innerText = "Years until you turn 70: " + yearsUntil70;
}