import Header from "../components/Header";

import React, { useEffect, useState } from "react";

const Home = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Header isSticky={isSticky} />
      <div className="h-40 grid place-content-center bg-indigo-900 text-gray-50">
        <h1 className="text-xl">Hello, world. Learn how to code</h1>
      </div>
      <div className="container mx-auto">
        <div className="p-4">
          <h2 className="font-bold text-lg">Recent Posts</h2>
          <p className="h-[2000px]">Some content</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
