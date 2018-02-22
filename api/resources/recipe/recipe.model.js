import mongoose, { Schema } from 'mongoose';

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

recipeSchema.index({ name: 1 });

const Recipe = mongoose.model('recipe', recipeSchema);

export default Recipe;
