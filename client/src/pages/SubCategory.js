import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import axios from "axios";
import toast from "react-hot-toast";
import CategoryProduct from "./CategoryProduct";
import Addsub from "./AddSubcat";

const SubCategory = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [subcategory, setSubcategory] = useState([]);
  
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getSubcategory();
  }, [params?.slug]);
  const getSubcategory = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/subcategory/subcategory-category/${params.slug}`
      );
      setSubcategory(data?.subcategory);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };



  return (

    <div className="container" style={{ marginTop: "100px" }}>
    <h1>{category?.name} [ {subcategory.length} ]</h1>
    <p>SubCategories</p>
    <div className="row container">
      {subcategory.map((c) => (
        <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key={c._id}>
          <div className="card">
            <Link to={`/subcategory/${c.slug}`} className="btn cat-btn">
              {c.name}
            </Link>
          </div>
        </div>
      ))}
    </div>


    <CategoryProduct/>
    

  </div>

   
 
  );
};

export default SubCategory;