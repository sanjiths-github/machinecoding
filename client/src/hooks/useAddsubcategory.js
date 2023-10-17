import { useState, useEffect } from "react";
import axios from "axios";

export default function useAddsubcategory() {
  const [addsubcategories, setaddSubCategories] = useState([]);

  //get cat
  const getaddSubCategories = async () => {
    try {
      const { data } = await axios.get("/api/v1/addsubcategory/get-addsubcategory");
      setaddSubCategories(data?.addsubcategory);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getaddSubCategories();
  }, []);

  return addsubcategories;
}