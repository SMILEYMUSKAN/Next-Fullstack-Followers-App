"use client";
import Content from "./Content";
import Header from "./Header";

const HomePage = () => {
  return (
    <div className="bg-gray-600 h-screen flex flex-col">
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"></link>
      <Header />
      <Content />
    </div>
  );
};

export default HomePage;
