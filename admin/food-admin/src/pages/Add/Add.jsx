import {
  useState
} from 'react'
import { assets } from '../../assets/assets'
import './Add.css'
import axios from 'axios'
import { toast } from 'react-toastify'


const Add = () => {
  const [image, setImage] = useState(false);
  const url = 'http://localhost:4000'
  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Salad'
  })

  const onchangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmitHnadler = async (event) => {
    event.preventDefault();
    const fromData = new FormData();
    fromData.append('name', data.name)
    fromData.append('description', data.description)
    fromData.append('price', Number(data.price))
    fromData.append('category', data.category)
    fromData.append('image', image)

    const response = await axios.post(`${url}/api/food/add`, fromData)

    if (response.data.success) {
      setData({
        name: '',
        description: '',
        price: "",
        category: 'Salad'
      })
      setImage(false)
      toast.success(response.data.message)
    } else {
      toast.error(response.data.message)
    }
  }

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHnadler}>
        <div className='add-img-upload flex-col'>
          <p>Upload image</p>
          <label htmlFor='image'>
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt='' />
          </label>
          <input type='file' onChange={(e) => setImage(e.target.files[0])} id='image' hidden />
        </div>
        <div className='add-product-name flex-col'>
          <p>Product name</p>
          <input onChange={onchangeHandler} value={data.name} type='text' name='name' placeholder='type here' />
        </div>
        <div className='add-product-description flex-col'>
          <p>Product description</p>
          <textarea onChange={onchangeHandler} value={data.description} name='description' rows={6} placeholder='Write description here' />
        </div>
        <div className='add-category-price'>
          <div className='add-category flex-col'>
            <p>Product category</p>
            <select name="category" onChange={onchangeHandler} >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desserts">Desserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="cake">cake</option>
              <option value="Pure veg">Pure veg</option>
              <option value="pasta">pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className='add-price flex-col'>
            <p>Product price</p>
            <select name="price" onChange={onchangeHandler} >
              <option value="80">$80</option>
              <option value="100">$100</option>
              <option value="200">$200</option>
              <option value="150">$150</option>
              <option value="250">$250</option>
              <option value="300">$300</option>
              <option value="350">$350</option>
              <option value="400">$400</option>
            </select>
          </div>

        </div>
        <button type='submit' className='add-btn'>Add</button>
      </form>

    </div>
  )
}

export default Add