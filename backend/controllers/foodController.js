import foodModel from "../modals/foodModal.js";
import fs from 'fs';

const addFood = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;

    if (!name || !price || !category) {
      return res.status(400).json({
        success: false,
        message: "Name, price, and category are required"
      });
    }

    const food = new foodModel({
      name,
      description,
      price,
      category,
      image: req.file ? req.file.filename : null
    });

    await food.save();

    res.status(201).json({
      success: true,
      message: "Food added successfully",
      data: food
    });

  } catch (error) {
    console.error("Add Food Error:", error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

//all food list

const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({})
    res.json({ success: true, data: foods })
  } catch (error) {
    console.log('Err', error)
    res.json({ success: false, message: error })
  }
}

//remove foods

const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id)
    fs.unlink(`uploads/${food.image}`, () => { });
    await foodModel.findByIdAndDelete(req.body.id)
    res.json({success: true, message:'Food removed'})
  } catch (error) {
    console.log('Err', error)
    res.json({success: false, message:error})
  }
}

export { addFood, listFood, removeFood };
