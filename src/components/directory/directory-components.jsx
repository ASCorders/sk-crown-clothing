import React from "react";
import "./directory.style.scss";
import CategoryItem from "../category-item/category-item.component";
function Directory({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((categorie) => (
        <CategoryItem key={categorie.id} categorie={categorie} />
      ))}
    </div>
  );
}

export default Directory;
