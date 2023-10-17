import React, { useState, useEffect } from "react";

import { useParams, useNavigate, Link } from "react-router-dom";

import axios from "axios";
const Prodaddsub = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [addprodsubCategorys , setProductsss] = useState([]);
  const [subcategory, setCategoryss] = useState([]);

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/addproductsub/productsubb-category/${params.slug}`
      );
      setProductsss(data?.addprodsubCategorys );
      setCategoryss(data?.subcategory);
    } catch (error) {
      console.log(error);
    }
  };

  return (

 
    <div className="container" style={{ marginTop: "100px" }}>
    <h1>All </h1>
    <div> <h1>{subcategory?.name} [ {addprodsubCategorys?.length} ]</h1> </div> 
    <hr></hr>
    <tbody>
    {addprodsubCategorys?.map((c) => (
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

export default Prodaddsub;