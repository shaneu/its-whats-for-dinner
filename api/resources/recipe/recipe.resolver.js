import Recipe from './recipe.model';

const allRecipes = () => Recipe.find({}).exec();

const getRecipe = async (_, { name }) => {
  const regEx = new RegExp(name, 'i');
  const [recipe] = await Recipe.find({
    name: { $regex: regEx },
  }).exec();
  return recipe;
};

const updateRecipe = () => {};

export default {
  Query: {
    allRecipes,
    Recipe: getRecipe,
  },
};
