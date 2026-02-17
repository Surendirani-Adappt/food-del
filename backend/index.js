import express from 'express';
import cors from 'cors';
import { connectDb } from './config/db.js';
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js';
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js';
const app = express();
const PORT = 4000;

app.use(express.json());

app.use(cors());

connectDb();

app.use('/api/food', foodRouter)
app.use('/images', express.static('uploads'))
app.use('/api/user',userRouter)
app.use('/api/cart', cartRouter)

app.get("/", (req, res) => {
    res.send(`Server running on port`)
})
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})