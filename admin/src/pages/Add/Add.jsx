import React, { useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets.js";
import axios from "axios"
import { toast } from "react-toastify";

const Add = () => {
    const url = "http://localhost:4000";
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
      name: "",
      description: "",
      price: "",
      category: "Salad",
    });

    const onChangeHandler = (event) =>{
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]: value}))
    };


    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try {
          const formData = new FormData();
          formData.append("name", data.name);
          formData.append("description", data.description);
          formData.append("price", Number(data.price));
          formData.append("category", data.category);
          formData.append("image", image);

          const response = await axios.post(`${url}/api/food/add`, formData);

          if (response.data.success) {
            toast.success("Product Added Successfully!");

            setData({
              name: "",
              description: "",
              price: "",
              category: "Salad",
            });
            setImage(false);
          } else {
            toast.error("Failed to add product!");
          }
        } catch (error) {
          toast.error("Something went wrong!");
        }
    };

  return (
    <div className="add">
      <form onSubmit={onSubmitHandler} encType="multipart/form-data">
          <h2 className="add-title">Add New Product</h2>

          <div className="add-card">

            {/* Upload Section */}
            <div className="add-img-upload">
              <p className="label">Upload Image</p>
              <label className="upload-box">
                <img src={image? URL.createObjectURL(image) :assets.upload_area} alt="upload" />
                <input
                    type="file"
                    name="image"
                    onChange={(e) => {
                        // console.log("IMAGE SELECTED:", e.target.files[0]);
                        setImage(e.target.files[0]);
                    }}
                    hidden
                />
              </label>
            </div>

            {/* Form Section */}
            <div className="add-form">
              {/* Product Name */}
              <div className="input-group">
                <label>Product Name</label>
                <input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder="Enter product name" />
              </div>

              {/* Product Description */}
              <div className="input-group">
                <label>Product Description</label>
                <textarea name="description" onChange={onChangeHandler} value={data.description} placeholder="Enter product description"></textarea>
              </div>

              {/* Category */}
              <div className="input-group">
                <label>Category</label>
                <select name="category" onChange={onChangeHandler} value={data.category}>
                    <option value="Burger">Burger</option>
                    <option value="Ice Cream">Ice Cream</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Veg Thali">Veg Thali</option>
                    <option value="Sweets">Sweets</option>
                    <option value="Salad">Salad</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Southern">Southern</option>
                    <option value="Biryani">Biryani</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Cake">Cake</option>
                </select>
              </div>

              {/* Price */}
              <div className="input-group">
                <label>Price</label>
                <input name="price" onChange={onChangeHandler} value={data.price} type="number" placeholder="Enter price" />
              </div>

              {/* Submit Button */}
              <button className="add-btn">Add Product</button>
            </div>
          </div>
      </form>
    </div>
  );
};

export default Add;