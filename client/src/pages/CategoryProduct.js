import React, { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";
const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProductss] = useState([]);
  const [category, setCategorys] = useState([]);

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );
      setProductss(data?.products);
      setCategorys(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
  
      <div className="container mt-3 category">
      
      <h1>Products List</h1>
      <hr></hr>
      <tbody>
      {products?.map((c) => (
        <>
          <tr>
            <td key={c._id}>{c.name}</td>
            <td>
             
            </td>
          </tr>
        </>
      ))}
    </tbody>
      
      </div>
  
  );
};

export default CategoryProduct;