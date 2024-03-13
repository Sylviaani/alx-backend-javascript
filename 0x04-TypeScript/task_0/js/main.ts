interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Gina",
    lastName: "Ekwealor",
    age: 23,
    location: "USA"
}
const student2: Student = {
    firstName: "Stephanie",
    lastName: "Onyiwa",
    age: 26,
    location: "Nigeria"
}

const arry = [student1, student2];
const table = document.createElement("table");
const tbody = document.createElement("tbody");

for (let student of arry) {
    const tr = document.createElement("tr");
    const firstNameTd = document.createElement("td");
    const locationTd = document.createElement("td");

    firstNameTd.textContent = student.firstName;
    locationTd.textContent = student.location;

    tr.appendChild(firstNameTd);
    tr.appendChild(locationTd);

    tbody.appendChild(tr)
}

table.appendChild(tbody);
document.body.appendChild(table);