import React, { useState,useEffect } from "react";
import axios from 'axios';
import Product from './Product/Product';
import styles from './Products.module.css';

const Products = () => {

  const [data,setdata]=useState([]);

  const getData=async()=>{
    let r=await axios.get("http://localhost:8080/products");
    setdata(r.data);
  }
  useEffect(()=>{
    getData();
  },[]);

  return (
    <div className={styles.Products}>
    {data.map(product=>
      <Product product={product} key={product.id}/>
    )}
  
  </div>
  )
}

export default Products;
