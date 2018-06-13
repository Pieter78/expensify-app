//
// Object destructuring
//


// const person = {
//   age: 27,
//   location: {
//     city: 'Rhenen',
//     temp: 25,
//   },
// };

// const { name: firstName = 'Anonymous', age } = person;

// const { temp: temperature, city } = person.location;

// console.log(`${firstName} is ${age}.`);
// console.log(`It's ${temperature} in ${city}`);

// const book = {
//   title: 'Old man and the Sea',
//   author: 'Ernest Hemmingway',
//   publisher: {
//     name: 'Penguin',
//   },
// };

// const { name: publisherName = 'Self Published' } = book.publisher;

// console.log(publisherName);


//
// Array destructuring
//

const address = ['Ulitsa Prespa 2', 'Sofia'];

const [, city, region = 'Unknown'] = address;

console.log(`You are in ${city}, ${region}.`);


const item = ['Coffee (hot),', '$2.00', '$2.50', '$2.75'];

const [drink, , mediumPrice] = item;

console.log(`A medium ${drink} costs ${mediumPrice}`);
