const user = {
    email: 'test@miu.edu',
    password: '123',
    getInfo: function(){
        console.log(this.email + " " + this.password);
    }
}
console.log(user);

const myadmin = 'role';
const roleName = 'Guest';
user.myadmin = roleName;
console.log(user);
user.getInfo();

const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 20,
    'my gender': 'F'
}
console.log(person.firstName);
console.log(person['my gender']);

person.firstName = 'Edward';
console.log(person);