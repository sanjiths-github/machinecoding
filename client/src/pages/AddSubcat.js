import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import axios from "axios";


import ProdSub from "./Prodsub";
const Addsub  = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [addsubCategorys, setaddSubcategory] = useState([]);
  const [subcategory, setaddCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getSubcategory();
  }, [params?.slug]);
  const getSubcategory = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/additionalsubcategory/addsubcategory-addcategory/${params.slug}`
      );
      setaddSubcategory(data?.addsubCategorys);
      setaddCategory(data?.subcategory);
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div className="container" style={{ marginTop: "100px" }}>
  <div> <h1>{subcategory?.name} [ {addsubCategorys.length} ]</h1> </div> 
  <p>Subcategories</p>
    <div className="row container">
      {addsubCategorys.map((c) => (
        <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key={c._id}>
          <div className="card">
            <Link to={`/addsubcategory/${c.slug}`} className="btn cat-btn">
              {c.name}
            </Link>
          </div>
        </div>
      ))}
    </div>
  <ProdSub/>

  </div>


 
  );
};

export default Addsub ;
