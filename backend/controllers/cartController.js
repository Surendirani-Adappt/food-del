import userModel from '../modals/userModal.js';

// add items

const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findOne({ _id: req.body.userId });
        let cartData = await userData.cartData;
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1
        } else {
            cartData[req.body.itemId] += 1
        }
        await userModel.findByIdAndUpdate(req.body.userId, { cartData })
        return res.json({ success: true, message: 'added to cart' })
    } catch (error) {
        console.log(error)
        return res.json({ success: false, message: error })
    }
}


const removeFromCart = async (req, res) => {

}


const fetchCart = async (req, res) => {

}

export { addToCart, removeFromCart, fetchCart }