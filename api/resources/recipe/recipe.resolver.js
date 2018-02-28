import Recipe from './recipe.model';

const createRecipe = async (_, { input }) => {
  const newRecipe = await Recipe.create(input);

  if (!newRecipe) {
    throw Error('There was an error storing your recipe');
  }

  return newRecipe;
};

const getAllRecipes = () => Recipe.find({}).exec();

const getRecipeByName = async (_, { name }) => {
  const regEx = new RegExp(name, 'i');
  const [recipe] = await Recipe.find({
    name: { $regex: regEx },
  }).exec();

  if (!recipe) {
    throw Error(`No matching recipe was found`);
  }
  return recipe;
};

const getRecipeById = async (_, { id }) => {
  const recipe = Recipe.findById(id).exec();

  if (!recipe) {
    throw Error('No matching recipe was found');
  }
  return recipe;
};

const updateRecipe = async (
  _,
  { id, input: { name, description, ingredients, instructions, tags } }
) => {
  const recipe = await Recipe.findById(id);

  if (name) recipe.name = name;
  if (description) recipe.description = description;
  if (ingredients) {
    ingredients.forEach(ingredient => {
      if (ingredient.id) {
        const doc = recipe.ingredients.id(ingredient.id);
        if (ingredient.ingredient) doc.ingredient = ingredient.ingredient;
        if (ingredient.ammount) doc.ammount = ingredient.ammount;
      } else {
        recipe.ingredients.push(ingredient);
      }
    });
  }
  if (instructions) recipe.instructions.addToSet(...instructions);
  if (tags) recipe.tags.addToSet(...tags);

  const updatedRecipe = await recipe.save();

  return updatedRecipe;
};

const deleteRecipe = async (_, { input: id }) => {
  const deletedRecipe = await Recipe.findByIdAndRemove(id);

  if (!deletedRecipe) {
    throw Error('There was an error deleting your message');
  }

  return deletedRecipe;
};

export default {
  Query: {
    getAllRecipes,
    getRecipeByName,
    Recipe: getRecipeById,
  },

  Mutation: {
    createRecipe,
    updateRecipe,
    deleteRecipe,
  },
};
