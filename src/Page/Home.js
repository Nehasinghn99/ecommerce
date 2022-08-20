import React from 'react'
import Navbar from "../Component/Navbar";
import Announcement from "../Component/Announcement";
import Slider from "../Component/Slider";
import Categories from '../Component/Categories';
import Newsletter from '../Component/Newsletter';
import Footer from '../Component/Footer';
import styled from 'styled-components';
import ProductList from './ProductList';
import Cart from '../Page/Cart'
import Register from '../Page/Register';
import Login from '../Page/Login';
import Product from './Product';

const Container = styled.div`

`;

function Home  ()  {
  return (
    <Container>
      {/* <Navbar/>
      <Register/>
      <Login/>
      <Newsletter/>
      <Footer/> */}
      {/* <Slider></Slider> */}
      {/* <Categories/> */}
      <Product/>
      {/* <ProductList/> */}
      {/* <Cart/> */}
    </Container>
  )
}

export default Home
