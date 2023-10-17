import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to = '/' className="navbar-brand" href="#">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to= "/create-category" className="nav-link active" aria-current="page" href="#">CreateCategory</Link>
        </li>
        <li className="nav-item">
        <Link to= "/create-subcategory" className="nav-link active" aria-current="page" href="#">Create-SubCategory</Link>
      </li>
     
      <li className="nav-item">
      <Link to= "/create-addsubcategory" className="nav-link active" aria-current="page" href="#">CreateAdditional-subCategory</Link>
    </li>
   
    <li className="nav-item">
      <Link to= "/create-product" className="nav-link active" aria-current="page" href="#">CreateProductsto-categories</Link>
    </li>

    <li className="nav-item">
    <Link to= "/create-productsub" className="nav-link active" aria-current="page" href="#">CreateProductsto-subcategories</Link>
  </li>

      <li className="nav-item">
    <Link to= "/create-prodsubcategory" className="nav-link active" aria-current="page" href="#">CreateProductsto-Additionalsubcategory</Link>
  </li>
   
   

       
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header
