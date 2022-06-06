import React from 'react';
import Products from '../components/Products/Products';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.Home}>
    {/* Code here */}
    <h1>Products</h1>
    <Products/>
    </div>
  ) 
}

export default Home;
