import model, { Schema } from 'mongoose';

const recipeSchema = Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'Recipe must have a name'],
    },
    description: String,
    ingredients: [{ ingredient: String, ammount: String }],
    instructions: [String],
    tags: [String],
  },
  { timestamps: true }
);

const Recipe = model('recipe', recipeSchema);

export default Recipe;
