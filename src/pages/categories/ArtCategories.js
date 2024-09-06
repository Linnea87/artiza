import React, { useEffect, useState } from "react";
import { axiosReq } from '../../api/axiosDefaults';
import Asset from "../../components/Asset";
import Container  from "react-bootstrap/Container";
import styles from "../../styles/ArtCategories.module.css";

import { Link } from "react-router-dom";

import { useSetSelectedCategory } from "../../contexts/SelectedCategoryContext";

const ArtCategories = ({ selectedCategory, mobile }) => {
  const [categories, setCategories] = useState("");

  const setSelectedCategory = useSetSelectedCategory();

  useEffect(() => {
    // fetch existing categories
    const fetchCategories = async () => {
      try {
        const { data } = await axiosReq.get("/categories/");
        setCategories(data);
      } catch (err) {
        // console.log(err);
      }
    };
    fetchCategories();
  }, []);

  const handleClick = (category_id) => {
    // setting selected category
    setSelectedCategory(category_id);
  };

  return (
    <Container className={`${styles.CategoryContainer} ${
        mobile && "d-lg-none text-center mb-3 mt-4"
      }`}
    >
      {categories?.results?.length ? (
        <>
          {/* display categories in the order of popularity */}
          <p className={styles.Header}>Art Categories</p>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {categories.results.slice()?.map((category) => (
              <Link
                to={`/categories/${category.id}/posts`}
                className={styles.CategoryName}
                key={category.id}
                onClick={() => handleClick(category.id)}
            >
                {category.name}
              </Link>
            
              ))}
            </div>
          ) : (
            categories.results?.map((category) => (
            <Link
              to={`/categories/${category.id}/posts`}
              className={styles.CategoryName}
              key={category.id}
              onClick={() => handleClick(category.id)}
            >
              {category.name}
            </Link>
            ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default ArtCategories;