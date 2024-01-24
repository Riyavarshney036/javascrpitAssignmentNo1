/** Q1. Write a pro,ram that ,rade' 'tudent' ba'ed on their mark'6
& If grqatqr than 90 thqn A Gradp
& If bqtwqqn 70 and 90 thqn a B gradp
& If bqtwqqn  50 and 70 thqn a C gradp
& Bqlow 50 thqn an F grade */

// Input the student's marks
const marks = 71;


// Determine the grade based on marks
let grade;
if (marks >= 90) {
  grade = "A";
} else if (marks >= 70) {
  grade = "B";
} else if (marks >= 50) {
  grade = "C";
} else {
  grade = "F";
}

// Display the student's grade
console.log(`The student's grade is: ${grade}`);
