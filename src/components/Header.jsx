import React, { useEffect, useState } from "react";

const Header = () => {
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
    <div
      className={`bg-indigo-500 text-indigo-50 ${
        isSticky ? "fixed top-0" : ""
      }`}
    >
      <header>
        <ul className="list-none flex justify-center gap-4">
          <li className="p-2">Home</li>
          <li className="p-2">Blog</li>
          <li className="p-2">About</li>
          <li className="p-2">Contact</li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
