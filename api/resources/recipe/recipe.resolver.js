// import Recipe from './recipe.model';

const getAllRecipes = () => [
  {
    id: 7,
    name: 'Spaghetti',
    description: 'Good pasta',
    ingredients: { ingredient: 'Pasta', ammount: '1 cup' },
    instructions: ['Make pasta', 'Add sauce', 'Serve'],
    tags: ['Pasta', ['Good']],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
// const getRecipe = () => {};
const updateRecipe = () => {};

export default {
  Query: {
    getAllRecipes,
  },
};
