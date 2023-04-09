import React from "react";
import Categories from "../../components/categories/Categories";
import FeaturedBlogs from "../../components/featuredBlogs/FeaturedBlogs";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/newsLetter/NewsLetter";
import classes from "./home.module.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <FeaturedBlogs />
      <Categories />
      {/* <NewsLetter /> */}
      <Footer />
    </div>
  );
};

export default Home;
