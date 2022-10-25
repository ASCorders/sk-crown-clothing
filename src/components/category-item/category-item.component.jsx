import React from "react";
import "./category-item.style.scss";
function CategoryItem({categorie}) {
    const { imageUrl, title} = categorie
  return (
    <div className="category-container large" >
    <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
    <div className="category-body-container">
      <h2>{title}</h2>
      <p>shop Now</p>
    </div>
  </div>
  )
}

export default CategoryItem;
