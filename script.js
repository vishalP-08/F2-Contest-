/** @format */

let employees = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
   const developers = employees.filter(employee => employee.profession === "developer");
  developers.map(developer => console.log(developer));
}

function PrintDeveloperbyForEach() {
  employees.forEach(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  employees.push(newEmployee);
  console.log(newEmployee);
}

function removeAdmin() {
 const updatedEmployees = employees.filter(employee => employee.profession !== "admin");
  console.log(updatedEmployees);
}

function concatenateArray() {
  const newArray = [
    { id: 5, name: "emma", age: "22", profession: "developer" },
    { id: 6, name: "mike", age: "24", profession: "admin" },
    { id: 7, name: "lucy", age: "21", profession: "developer" }
  ];
  const combinedArray = employees.concat(newArray);
  console.log(combinedArray);
}

