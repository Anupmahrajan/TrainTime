function exampleFunciton(Fname,Lname){
    return Fname+ " " + Lname;
}

//console.log (exampleFunciton("Anup","Mhr"))

const getFullName = (firstName, lastName) => {
    return firstName + lastName;

}
//console.log (getFullName("Anup", "Mhr"));

let persone = {
    firstName: "Anup",
    lastName: "Mhr",
    Age: 22,
    Address: "KTM",
    getfullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
//console.log (persone.getfullName());

let car = {
    Name:  "Toyota",
    model: "m10",
    price: 3000,
    getTotalPriceWithVAT: function() {
        return (13/100 * this.price) + this.price;
    }
}
console.log (car.getTotalPriceWithVAT());

