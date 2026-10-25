let students = [];

function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    if (name === "" || roll === "") {
        alert("Enter all details");
        return;
    }

    students.push({name: name, roll: roll});

    let li = document.createElement("li");
    li.innerHTML = name + " - " + roll;
    document.getElementById("list").appendChild(li);

    alert("Student Registered");
}

function searchStudent() {
    let roll = document.getElementById("roll").value;
    let msg = "Student not found";

    for (let i = 0; i < students.length; i++) {
        if (students[i].roll === roll) {
            msg = "Student Found: " + students[i].name;
            break;
        }
    }

    document.getElementById("msg").innerHTML = msg;
}