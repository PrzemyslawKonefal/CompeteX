export const users = [
  {
    id: 72,
    firstName: 'Konrad',
    lastName: 'Michno',
    email: 'kmichno@gmail.com',
    img: 'https://www.freeiconspng.com/uploads/people-png-9.png',
    workouts: [{img: 'https://cdn2.stylecraze.com/wp-content/uploads/2014/04/1000-Calorie-Workout-To-Burn-Fat-%E2%80%93-Can-You-Really-Burn-1000-Calories-In-A-Day.jpg'}, {img: 'https://www.t-nation.com/system/publishing/articles/10005344/original/The-500-Workout.jpg?1505510812'}],
    style: 'green',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    lastActive: '01-04-2019',
    workoutsNumber: 38,
    labels: ['12% FAT', '190kg martwy']
  },
  {
    id: 22,
    firstName: 'Dominik',
    lastName: 'Ozga',
    email: 'dozga@gmail.com',
    img: 'https://toppng.com/public/uploads/preview/happy-person-11545688398rslqmyfw4g.png',
    workouts: [{img: 'https://cdn2.stylecraze.com/wp-content/uploads/2014/04/1000-Calorie-Workout-To-Burn-Fat-%E2%80%93-Can-You-Really-Burn-1000-Calories-In-A-Day.jpg'}, {img: 'https://www.t-nation.com/system/publishing/articles/10005344/original/The-500-Workout.jpg?1505510812'}],
    style: 'yellow',
    bio: 'Podróżnik-Marzyciel. Za dnia strugam drewno, w nocy zamieniam się w przebiżula.',
    lastActive: '02-04-2019',
    workoutsNumber: 17,
    labels: ['Bic 42cm', 'Broda']
  },
  {
    id: 12,
    firstName: 'Roland',
    lastName: 'Zwoliński',
    email: 'rzwolinski@gmail.com',
    img: 'https://static1.squarespace.com/static/55947ac3e4b0fa882882cd65/58ab7d7229687f223f18a4d4/58ab9a90f7e0ab024bc506f5/1487641285336/NS_0036.png',
    workouts: [{ img: 'https://cdn2.stylecraze.com/wp-content/uploads/2014/04/1000-Calorie-Workout-To-Burn-Fat-%E2%80%93-Can-You-Really-Burn-1000-Calories-In-A-Day.jpg' }, { img: 'https://www.t-nation.com/system/publishing/articles/10005344/original/The-500-Workout.jpg?1505510812' }],
    style: 'blue',
    bio: 'Moją siłą są stalowe nerwy',
    lastActive: '03-04-2012',
    workoutsNumber: 221,
    labels: ['120kg klata', 'Bezbrzusze']
  },
  {
    id: 7,
    firstName: 'Bartosz',
    lastName: 'Słysz',
    email: 'bslysz@gmail.com',
    img: 'https://static1.squarespace.com/static/55947ac3e4b0fa882882cd65/58ab7d7229687f223f18a4d4/58ab9ad5197aeab50de5c76d/1487641340410/NS_0059.png',
    workouts: [{img: 'https://cdn2.stylecraze.com/wp-content/uploads/2014/04/1000-Calorie-Workout-To-Burn-Fat-%E2%80%93-Can-You-Really-Burn-1000-Calories-In-A-Day.jpg'}, {img: 'https://www.t-nation.com/system/publishing/articles/10005344/original/The-500-Workout.jpg?1505510812'}],
    style: 'red',
    bio: 'lorem ipsum tekatonibum krystus tui hesus',
    lastActive: '05-03-2019',
    workoutsNumber: 1000,
    labels: ['HULK']
  }
];



export const trainingsMock = [
  {
    owner: {
      id: 7,
      firstName: 'Bartosz',
      lastName: 'Słysz',
      img: 'https://static1.squarespace.com/static/55947ac3e4b0fa882882cd65/58ab7d7229687f223f18a4d4/58ab9ad5197aeab50de5c76d/1487641340410/NS_0059.png'
    },
    id: 1,
    img: 'https://i.pinimg.com/originals/47/04/fc/4704fc26f0914b5296f87f926b1cfb5b.jpg',
    duration: 120,
    type: 'Split',
    description: 'Plecy 4x4 x 100 Nogi też całe ale było'
  },
  {
    owner: {
      id: 7,
      firstName: 'Bartosz',
      lastName: 'Słysz',
      img: 'https://static1.squarespace.com/static/55947ac3e4b0fa882882cd65/58ab7d7229687f223f18a4d4/58ab9ad5197aeab50de5c76d/1487641340410/NS_0059.png'
    },
    id: 2,
    img: 'https://www.bodybuilding.com/images/the-full-body-dumbbell-workout-you-can-do-anywhere-header-400x225.jpg',
    duration: 120,
    type: 'Split',
    description: 'Plecy 4x4 x 100 Nogi też całe ale było'
  },
  {
    owner: {
      id: 22,
      firstName: 'Dominik',
      lastName: 'Ozga',
      img: 'https://toppng.com/public/uploads/preview/happy-person-11545688398rslqmyfw4g.png',
    },
    id: 3,
    img: '',
    duration: 90,
    type: 'Split',
    description: 'Plecy 4x4 x 100 Nogi też całe ale było'
  }
];
