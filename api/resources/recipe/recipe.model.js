import mongoose, { Schema } from 'mongoose';

const ingredientsSchema = Schema({
  ingredient: String,
  ammount: String,
});

const recipeSchema = Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'Recipe must have a name'],
      trim: true,
    },
    description: String,
    ingredients: [ingredientsSchema],
    instructions: [String],
    tags: [String],
  },
  { timestamps: true }
);

recipeSchema.index({ name: 1 });

const Recipe = mongoose.model('recipe', recipeSchema);

export default Recipe;
