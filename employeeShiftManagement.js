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
  