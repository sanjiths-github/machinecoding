import React, { useState, useEffect } from "react";
import {useParams, Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import useSubcategory from "../hooks/useSubcategory";
import axios from "axios";
import toast from "react-hot-toast";

const Categories = () => {
  const params = useParams();
  const categories = useCategory();
  const [subcategory, setsubCategories] = useState([]);
  const [subcategorys, setsubCategoriess] = useState("");
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get( `/api/v1/subcategory/subcategory-category/electronics`);
      if (data?.success) {
        setsubCategories(data?.subcategory);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);



  return (

      <div className="container" style={{ marginTop: "100px" }}>
      <h1>All Categories</h1>
      <hr></hr>
        <div className="row container">
          {categories.map((c) => (
            <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              <div className="card">
                <Link to={`/category/${c.slug}`} className="btn cat-btn">
                  {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
 
  );
};

export default Categories;