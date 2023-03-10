// Function to define and export the Intern class. This class extends from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email);
        this.school = school
    }
   
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern"
    } 

}
module.exports = Intern;