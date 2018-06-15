
// Andrew is a Software Developer at Amazon
// Set up subscription

// const onChange = database.ref().on('value', (snapshot) => {
//   const { name, job: { company, title } } = snapshot.val();
//   console.log(`${name} is a ${title} at ${company}.`);
// });


// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, error => console.log(`Error: ${error}`));


// database.ref().on('value', (snapshot) => {
//   const { name, job: { title, company } } = snapshot.val();
//   console.log(`${name} is a ${title} at ${company}`);
// });

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(error => console.log(`Error: ${error}`));

// database.ref().set({
//   name: 'Pieter Overbeek',
//   age: 37,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google',
//   },
//   isSingle: false,
//   location: {
//     city: 'Sofia',
//     country: 'Bulgaria',
//   },
// }).then(() => {
//   console.log('data is saved');
// }).catch((error) => {
//   console.log('This failed: ', error);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Varna',
// }).then(() => {
//   console.log('Updated!');
// });


// database.ref('isSingle')
//   .set(null)
//   .then(() => console.log('Removed!'))
//   .catch(error => console.log('error', error));

// database.ref()
//   .remove()
//   .then(() => console.log('Data was removed!'))
//   .catch(error => console.log('Error: ', error));

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});


// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses')
//   .push({
//     amount: 100,
//     createdAt: 50000000,
//     description: 'coffee',
//     note: 'black',
//   });

// setup "expenses" with three items (desciption)

// database.ref('notes').push({
//   title: 'First note!',
//   body: 'This is my note',
// });

// database.ref('notes').push({
//   title: 'Second note!',
//   body: 'This is my second note',
// });


// const firebaseNotes = {
//   notes: {

//   }
// }

// const notes = [{
//   id: '12',
//   title: 'First note!',
//   body: 'This is my note',
// }, {
//   id: '13',
//   title: 'Second note!',
//   body: 'This is my note',
// }, {
//   id: '14',
//   title: 'Third note!',
//   body: 'This is my note',
// }];

// database.ref('notes').set(notes);
