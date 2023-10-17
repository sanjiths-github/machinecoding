import { Routes, Route } from "react-router-dom";
import './App.css';
import CreateCategory from "./pages/Dashboard/CreateCategory";
import Categories from "./pages/Categories";
import CreateSubcategory from "./pages/Dashboard/CreateSubcategory";
import SubCategory from "./pages/SubCategory";
import CreateAddSubcategory from "./pages/Dashboard/CreateAddsub";
import Addsub from "./pages/AddSubcat";
import Header from "./components/Header";
import CreateProduct from "./pages/Dashboard/CreateProduct";
import CategoryProduct from "./pages/CategoryProduct";
import CreateProdsub from "./pages/Dashboard/CreateProdsub";
import Createsubprod from "./pages/Dashboard/Createsubprod";
import Prodaddsub from "./pages/Prodaddsub";

function App() {
  return (
    <div >
    <Header/>
<Routes>

<Route path="/" element={<Categories/>} />

<Route path="/create-category" element={<CreateCategory />} />

<Route path="/create-prodsubcategory" element={<Createsubprod />} />

<Route path="/create-productsub" element={<CreateProdsub />} />
<Route path="/category/:slug" element={<SubCategory />} />

<Route path="/addsubcategory/:slug" element={<Prodaddsub/>}/>

<Route path="/subcategory/:slug" element={<Addsub />} />

<Route path="/create-product" element={<CreateProduct/>}/>

<Route path="/create-subcategory" element={<CreateSubcategory/>} />


<Route path="/create-addsubcategory" element={<CreateAddSubcategory/>} />
</Routes>



    </div>
  );
}

export default App;
