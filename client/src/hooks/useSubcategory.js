import { useState, useEffect } from "react";
import axios from "axios";

export default function useSubcategory() {
  const [subcategories, setSubCategories] = useState([]);

  //get cat
  const getSubCategories = async () => {
    try {
      const { data } = await axios.get("{/api/v1/subcategory/subcategory-category/${params.slug}");
      setSubCategories(data?.subcategory);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSubCategories();
  }, []);

  return subcategories;
}