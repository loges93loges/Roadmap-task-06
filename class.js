class Person {
    constructor(name, age, married, contact, mail, address) {
        this.name = name;
        this.age = age;
        this.married = married
        this.contact = contact;
        this.mail = mail;
        this.address = address;
    }
    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Married: ${this.married}`);
        console.log(`Contact: ${this.contact}`);
        console.log(`Mail: ${this.mail}`);
        console.log(`Address: ${this.address}`);
    }
}
const person1 = new Person("LogesWaran", 25, "Yes", 9942117613, "loges93321@gmail.com", "123 Main Street, City");
person1.displayDetails();