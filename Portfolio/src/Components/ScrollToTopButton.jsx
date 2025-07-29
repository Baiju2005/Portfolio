import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        title="Go to Top"
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#55dd1a] to-green-600 text-white p-3 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 animate-bounce cursor-pointer"
      >
        <i className="ri-arrow-up-line text-2xl transition-transform duration-300 hover:-translate-y-1" />
      </button>
    )
  );
};

export default ScrollToTopButton;
