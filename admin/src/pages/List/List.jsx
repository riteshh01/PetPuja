import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = () => {
  const url = "http://localhost:4000";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching data");
      }
    } catch (error) {
      toast.error("Server error");
    }
  };

  const removeFood = async (foodId) => {

    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });

      if (response.data.success) {
        toast.success("Item Deleted!");
        fetchList(); // refresh list
      } else {
        toast.error("Delete failed");
      }
    } catch (error) {
      toast.error("Server error");
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list-page">
      <h2 className="list-title">All Products</h2>

      <div className="list-table">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price (₹)</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {list.map((item) => (
              <tr key={item._id}>
                <td>
                  <img
                    src={`${url}/images/` + item.image}
                    alt={item.name}
                    className="list-img"
                  />
                </td>

                <td>{item.name}</td>
                <td className="desc">{item.description}</td>
                <td>{item.category}</td>
                <td>₹{item.price}</td>

                <td>
                  <button onClick={() => removeFood(item._id)} className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {list.length === 0 && (
          <p className="no-items">No Items Found</p>
        )}
      </div>
    </div>
  );
};

export default List;