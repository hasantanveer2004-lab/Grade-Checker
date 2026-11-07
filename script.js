
function checkGrade() {

    // Get marks from input
    let marks = Number(
        document.getElementById("marks").value
    );

    let grade;
    let message;

    // Check invalid marks
    if (document.getElementById("marks").value === "") {
        message = "Please enter your marks!";
    }

    // Conditional Statements
    else if (marks < 0 || marks > 100) {
        message = "Invalid marks! Enter 0 to 100.";
    }

    else if (marks >= 90) {
        grade = "A+";
        message = "Excellent Performance!";
    }

    else if (marks >= 80) {
        grade = "A";
        message = "Very Good!";
    }

    else if (marks >= 70) {
        grade = "B";
        message = "Good Performance!";
    }

    else if (marks >= 60) {
        grade = "C";
        message = "Keep Improving!";
    }

    else if (marks >= 50) {
        grade = "D";
        message = "You Passed!";
    }

    else {
        grade = "F";
        message = "Sorry! You Failed.";
    }

    // Display result
    if (grade !== undefined) {
        message += " Your Grade is " + grade;
    }

    document.getElementById("output").innerText = message;

    // Switch Statement Example
    switch (grade) {
        case "A+":
            console.log("Outstanding!");
            break;

        case "A":
            console.log("Excellent!");
            break;

        case "B":
            console.log("Good!");
            break;

        case "C":
            console.log("Average!");
            break;

        case "D":
            console.log("Pass!");
            break;

        case "F":
            console.log("Fail!");
            break;

        default:
            console.log("No grade available.");
    }
}
