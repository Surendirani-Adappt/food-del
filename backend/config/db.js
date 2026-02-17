import mongoose from "mongoose";


export const connectDb = async () => {
    await mongoose.connect('mongodb+srv://newt:DHVjMA51Sjnw9bC0@fooddelivery.r2biwhm.mongodb.net/?appName=FoodDelivery').then(() => console.log('DB Connected'));
}