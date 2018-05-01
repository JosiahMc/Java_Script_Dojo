
// // Challenge 1
// // Write a function that accepts an array of student objects, as shown below. Print all of the students' names and their cohorts.

// let students = [
//     {name: 'Remy', cohort: 'Jan'},
//     {name: 'Genevieve', cohort: 'March'},
//     {name: 'Chuck', cohort: 'Jan'},
//     {name: 'Osmund', cohort: 'June'},
//     {name: 'Nikki', cohort: 'June'},
//     {name: 'Boris', cohort: 'June'}
// ];

// function unpack_one (arr) {
// for (student in students) {
//     if (students.hasOwnProperty(student)) {
//         const info = students[student];
//         console.log(`Name: ${info.name}, Cohort: ${info.cohort}`)
//     }
// }
// }
// // unpack_one(students)
// // unpack(students)

// // Challenge 2
// // Write a function that accepts an object of users divided into employees and managers, as shown below, and logs the information to the console.

// let users = {
//     employees: [
//         {'first_name':  'Miguel', 'last_name' : 'Jones'},
//         {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
//         {'first_name' : 'Nora', 'last_name' : 'Lu'},
//         {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
//     ],
//     managers: [
//        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
//        {'first_name' : 'Gordon', 'last_name' : 'Poe'}
//     ]
//  };


// function unpack_two (object) {

//  for (user in users) {
//     if (users.hasOwnProperty(user)){
//         console.log(user.toUpperCase());
//         for(let i = 0; i < users[user].length; i++) {
//             let nameLength = users[user][i]['first_name'] + users[user][i]['last_name']
//             console.log(`${i+1} - ${users[user][i]['first_name']}, ${users[user][i]['last_name']} - ${nameLength.length}`)
//         }
//     }
//  }

// }
// unpack_two(users)

var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);

