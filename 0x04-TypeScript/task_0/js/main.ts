'use strict';
// Task 0 - Creates an interface for a student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// creates const first student with interface
const firstStudent: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    location: 'New York'
}

// creates const second student with interface
const secondStudent: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 25,
    location: 'Paris'

// creates const students list: array of students
const students: Student[] = [firstStudent, secondStudent];

const body: HTMLBodyElement = document.getElementsByTagName('body')[0];
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('tbody');
const rowHead: HTMLTableRowElement = thead.insertRow(0);
const cell1: HTMLTableCellElement = rowHead.insertCell(0);
const cell2: HTMLTableCellElement = rowHead.insertCell(1);

cell1Head.innerHTML = 'firstName';
cell2Head.innerHTML = 'location';
table.append(thead);

studentsList.forEach(student => {
    const row: HTMLTableRowElement = tbody.insertRow(0);
    const cell1: HTMLTableCellElement = row.insertCell(0);
    const cell2: HTMLTableCellElement = row.insertCell(1);
    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
});
table.append(tbody);
body.append(table);