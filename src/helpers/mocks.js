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
    img: 'https://www.polar.com/blog/wp-content/uploads/2018/01/Spotlight_Fitness-Quest-300x300.jpg',
    imgBig: 'https://www.polar.com/blog/wp-content/uploads/2018/01/Spotlight_Fitness-Quest-300x300.jpg',
    duration: 120,
    type: 'Split',
    description: 'Plecy 4x4 x 100 Nogi też całe ale było',
    table: {},
    likes: [
      {
        id: 22,
        firstName: 'Dominik',
        lastName: 'Ozga',
        img: 'https://toppng.com/public/uploads/preview/happy-person-11545688398rslqmyfw4g.png'
      }
    ],
    views: 6422,
    commentsNumber: 14
  },
  {
    owner: {
      id: 7,
      firstName: 'Roland',
      lastName: 'Zwoliński',
      img: 'https://static1.squarespace.com/static/55947ac3e4b0fa882882cd65/58ab7d7229687f223f18a4d4/58ab9a90f7e0ab024bc506f5/1487641285336/NS_0036.png'
    },
    id: 6,
    img: 'http://www.exercisewebstore.com/wp-content/uploads/2015/06/Muscle-Fitness-Training-Is-It-Really-Good-For-the-Body-300x300.jpg',
    imgBig: 'http://www.exercisewebstore.com/wp-content/uploads/2015/06/Muscle-Fitness-Training-Is-It-Really-Good-For-the-Body-300x300.jpg',
    duration: 120,
    type: 'Split',
    description: 'Plecy 4x4 x 100 Nogi też całe ale było',
    likes: [
      {
        id: 72,
        firstName: 'Roland',
        lastName: 'Zwoliński',
        img: 'https://static1.squarespace.com/static/55947ac3e4b0fa882882cd65/58ab7d7229687f223f18a4d4/58ab9a90f7e0ab024bc506f5/1487641285336/NS_0036.png'
      }
    ],
    views: 64,
    commentsNumber: 14
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
    imgBig: 'https://www.bodybuilding.com/images/the-full-body-dumbbell-workout-you-can-do-anywhere-header-400x225.jpg',
    duration: 120,
    type: 'Split',
    description: 'Plecy 4x4 x 100 Nogi też całe ale było',
    likes: [
      {
        id: 72,
        firstName: 'Roland',
        lastName: 'Zwoliński',
        img: 'https://static1.squarespace.com/static/55947ac3e4b0fa882882cd65/58ab7d7229687f223f18a4d4/58ab9a90f7e0ab024bc506f5/1487641285336/NS_0036.png'
      }
    ],
    views: 64,
    commentsNumber: 14
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
    imgBig: '',
    duration: 90,
    type: 'Split',
    description: 'Plecy 4x4 x 100 Nogi też całe ale było',
    likes: [
      {
        id: 72,
        firstName: 'Roland',
        lastName: 'Zwoliński',
        img: 'https://static1.squarespace.com/static/55947ac3e4b0fa882882cd65/58ab7d7229687f223f18a4d4/58ab9a90f7e0ab024bc506f5/1487641285336/NS_0036.png'
      }
    ],
    views: 64,
    commentsNumber: 14
  },
  {
    owner: {
      id: 22,
      firstName: 'Dominik',
      lastName: 'Ozga',
      img: 'https://toppng.com/public/uploads/preview/happy-person-11545688398rslqmyfw4g.png',
    },
    id: 5,
    img: 'https://mypullzone-fitnessworld1.netdna-ssl.com/wp-content/uploads/2014/08/10-minute-abs-workout-300x300.jpg',
    imgBig: 'https://mypullzone-fitnessworld1.netdna-ssl.com/wp-content/uploads/2014/08/10-minute-abs-workout-300x300.jpg',
    duration: 90,
    type: 'Split',
    description: 'Plecy 4x4 x 100 Nogi też całe ale było',
    likes: [
      {
        id: 72,
        firstName: 'Roland',
        lastName: 'Zwoliński',
        img: 'https://static1.squarespace.com/static/55947ac3e4b0fa882882cd65/58ab7d7229687f223f18a4d4/58ab9a90f7e0ab024bc506f5/1487641285336/NS_0036.png'
      }
    ],
    views: 64,
    commentsNumber: 14
  },
  {
    owner: {
      id: 22,
      firstName: 'Dominik',
      lastName: 'Ozga',
      img: 'https://toppng.com/public/uploads/preview/happy-person-11545688398rslqmyfw4g.png',
    },
    id: 7,
    img: 'https://thenypost.files.wordpress.com/2013/08/extreme_workout-300x300.jpg?quality=90&strip=all',
    imgBig: 'https://thenypost.files.wordpress.com/2013/08/extreme_workout-300x300.jpg?quality=90&strip=all',
    duration: 90,
    type: 'Split',
    description: 'Plecy 4x4 x 100 Nogi też całe ale było',
    likes: [
      {
        id: 72,
        firstName: 'Roland',
        lastName: 'Zwoliński',
        img: 'https://static1.squarespace.com/static/55947ac3e4b0fa882882cd65/58ab7d7229687f223f18a4d4/58ab9a90f7e0ab024bc506f5/1487641285336/NS_0036.png'
      }
    ],
    views: 64,
    commentsNumber: 14
  },
  {
    owner: {
      id: 22,
      firstName: 'Dominik',
      lastName: 'Ozga',
      img: 'https://toppng.com/public/uploads/preview/happy-person-11545688398rslqmyfw4g.png'
    },
    id: 4,
    img: 'http://www.borntoworkout.com/wp-content/uploads/2016/08/Vin-Diesel-Riddick-Workout-300x300.jpg',
    imgBig: 'http://www.borntoworkout.com/wp-content/uploads/2016/08/Vin-Diesel-Riddick-Workout-300x300.jpg',
    duration: 90,
    type: 'Split',
    description: 'Plecy 4x4 x 100 Nogi też całe ale było',
    likes: [
      {
        id: 72,
        firstName: 'Roland',
        lastName: 'Zwoliński',
        img: 'https://static1.squarespace.com/static/55947ac3e4b0fa882882cd65/58ab7d7229687f223f18a4d4/58ab9a90f7e0ab024bc506f5/1487641285336/NS_0036.png'
      }
    ],
    views: 64,
    commentsNumber: 14
  },
  {
    owner: {
      id: 22,
      firstName: 'Dominik',
      lastName: 'Ozga',
      img: 'https://toppng.com/public/uploads/preview/happy-person-11545688398rslqmyfw4g.png',
    },
    id: 8,
    img: 'https://wedgeeffect.com/wp-content/uploads/2017/09/Workout-Wedge-by-Wedge-Effect-1-300x300.jpg',
    imgBig: 'https://wedgeeffect.com/wp-content/uploads/2017/09/Workout-Wedge-by-Wedge-Effect-1-300x300.jpg',
    duration: 90,
    type: 'Split',
    description: 'Plecy 4x4 x 100 Nogi też całe ale było',
    likes: [
      {
        id: 72,
        firstName: 'Roland',
        lastName: 'Zwoliński',
        img: 'https://static1.squarespace.com/static/55947ac3e4b0fa882882cd65/58ab7d7229687f223f18a4d4/58ab9a90f7e0ab024bc506f5/1487641285336/NS_0036.png'
      }
    ],
    views: 64,
    commentsNumber: 14
  }
];
