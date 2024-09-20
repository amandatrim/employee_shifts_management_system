/*
  Task 1
  The first task of this assignment is to create an employee array, that contains information
  about all the employees in the system. It stores the information of the employees using objects
*/

let employees = [
    { name: 'Fuhad', shifts: [{ day: 'Monday', hours: 4 }, { day: 'Thursdays', hours: 8 }] },
    { name: 'Sarah', shifts: [{ day: 'Wednesdays', hours: 5 }, { day: 'Fridays', hours: 12 }] },
    { name: 'Daniel', shifts: [{ day: 'Monday', hours: 10 }, { day: 'Tuesdays', hours: 5 }] },
    { name: 'James', shifts: [{ day: 'Tuesdays', hours: 9 }, { day: 'Thursdays', hours: 7 }, { day: 'Friday', hours: 8 }] }
    { name: 'Elis', shifts: [{ day: 'Monday', hours: 7 }, { day: 'Tuesdays', hours: 5 }, { day: 'Thursdays', hours: 8 }] },
]

/*
  Task 2
  The second task of this assignment is to create a function that outputs the details of employee shifts, it accepts the employee object
  as a parameter then logs out their names and the various days they have a shift, and how long the shift is
*/

function displayEmployeeShifts(employee) {
    // This logs an informative intro message
    console.log(`The shifts for ${employee.name} are:`);
    // I made use of a for each loop to go through the shifts array of the employee
    employee.shifts.forEach(shift => {
      console.log(`${shift.day}: ${shift.hours} hours`);
    });
  }

/*
  Task 3
  The third task of this assignment is to create a function that assigns shifts to various employeees.
  It accepts the employee's name, day of the shift and numbers of hours as parameters, it then adds it to the shifts array of that employee
*/

function assignShift(name, day, hours) {
    // This makes use of the javascript find method to determine the employee we are looking for, using their names
    const employee = employees.find(e => e.name === name);
    if (employee != undefined) {

    // This line checks if the employee already has a shift that day. If they do, then a new shift cannot be assigned. 
    //If they don't then a new shift is assigned to them

      const existingShift = employee.shifts.find(shift => shift.day === day);
      if (existingShift ) {
        console.log(`Error: ${name} is already working on ${day}`);
      } else {
        employee.shifts.push({ day, hours });
        console.log(`Assigned ${hours} hours on ${day} to ${name}`);
      }
    } else {
      console.log(`Employee ${name} not found`);
    }
  }

/*
  Task 4
  The fourth task of this assignment is to create a function that calculate the total number of hours worked by an employee.
  It makes use of the javascript reduce method to sum up the total hours worked by the employee that weeek.
  The function accepts the employee's name as parameter
*/

function calculateTotalHours(name) {

    // This line of code looks for the employee in the employee array using their names. If an employee with the passed name is not found, an error message is printed
    const employee = employees.find(e => e.name === name);
    if (employee != undefined) {
      // sums up the employees hours using the reduce method. 
      const totalHours = employee.shifts.reduce((sum, shift) => sum + shift.hours, 0);
      console.log(`${name} worked a total of ${totalHours} hours this week`);

      // Returns the total number of hours worked
      return totalHours;
    } else {
      console.log(`Employee ${name} not found`);
      return 0;
    }
  }
  