import { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";

import styles from "./App.module.css";

const ProductsBox = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch(
      //   "https://jsonplaceholder.typicode.com/posts"
      // );
      const response = await fetch(
        "https://fakestoreapi.com/products/category/jewelery"
      );
      const resData = await response.json();
      setData(resData);
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      <button>
        <Link to="/">Back</Link>
      </button>
      {/* <div className={styles["div-wrapper"]}>
        {data.map((el) => (
          <div key={el.id}>
            <h1>{el.title}</h1>
            <p>{el.body}</p>
          </div>
        ))}
      </div> */}
      <div className={styles["div-wrapper"]}>
        {data.map((el) => (
          <div key={el.id}>
            <img src={el.image} />
            <h1>{el.title}</h1>
            <p>${el.price}</p>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductsBox;
