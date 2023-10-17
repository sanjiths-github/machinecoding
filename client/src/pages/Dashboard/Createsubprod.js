import React, { useState, useEffect } from "react";

import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const  Createsubprod = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");


  const [addsubcategory, setCategory] = useState("");
 


  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/additionalsubcategory/get-addsubcategory");
      if (data?.success) {
        setCategories(data?.addsubCategory);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
   
      productData.append("category", addsubcategory);
      const { data } = axios.post(
        "/api/v1/addproductsub/create-prodsub",{
            name,addsubcategory
        }
       
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Created Successfully");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (

      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
      
          </div>
          <div className="col-md-9">
            <h1>Create Product to Additional sub category2</h1>
            <div className="m-1 w-75">
              <Select
                bordered={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
            
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="write a name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            

          
            
              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleCreate}>
                  CREATE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default Createsubprod;