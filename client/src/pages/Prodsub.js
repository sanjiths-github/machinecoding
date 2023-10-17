import React, { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";
const ProdSub = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [productsub, setProductss] = useState([]);
  const [subcategory, setCategorys] = useState([]);

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/productsub/productsub-category/${params.slug}`
      );
      setProductss(data?.productsub);
      setCategorys(data?.subcategory);
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div className="container mt-3 category">
      
    <h1>Products List</h1>
    <hr></hr>
    <tbody>
    {productsub?.map((c) => (
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

export default ProdSub;