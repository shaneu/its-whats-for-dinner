require('babel-register');
require('dotenv').config();
const Recipe = require('../resources/recipe/recipe.model').default;
const connect = require('./').default;

const recipes = [
  {
    name: 'Spaghetti',
    description: 'Really good pasta',
    ingredients: [{ ingredient: 'Pasta', ammount: '1 cup' }],
    instructions: ['Make pasta', 'Add sauce', 'Serve'],
    tags: ['Pasta', 'Good', 'Lunch', 'Dinner'],
  },
  {
    name: 'Cereal',
    description: 'Delicious cheerios',
    ingredients: [
      { ingredient: 'Cheerios', ammount: '1 cup' },
      { ingredient: 'Milk', ammount: '1/2 cup' },
    ],
    instructions: ['Pour cereal in bowl', 'Add milk', 'Serve'],
    tags: ['Cheerios', 'Good', 'Breakfast'],
  },
  {
    name: 'Grilled cheese sandwich',
    description: 'Gooey grilled cheese sandwich',
    ingredients: [
      { ingredient: 'White bread', ammount: '2 slices' },
      { ingredient: 'Munster cheese', ammount: '3 slices' },
      { ingredient: 'butter', ammount: '1 tablespoon' },
    ],
    instructions: [
      'Place cheese on bread',
      'put butter on griddle',
      'grill sandwich until bread is golden brown',
    ],
    tags: ['Cheese', 'Grilled', 'Lunch'],
  },
];

const seedDB = async () => {
  try {
    const db = await connect();
    await db.connection.dropDatabase();
    await Recipe.create(recipes);
    console.log('*----------seed successful----------*'); // eslint-disable-line no-console
    db.connection.close();
  } catch (err) {
    console.log('Error seeding the database', err); // eslint-disable-line no-console
    process.exit(1);
  }
};

seedDB();
