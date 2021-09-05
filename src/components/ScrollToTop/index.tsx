import { useEffect, useState } from "react";
import ArrowUp from "../../assets/arrow-up";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div className="bg-white hover:bg-gray-800 p-2 fixed bottom-6 right-6 z-50 shadow cursor-pointer border-2 border-gray-800" onClick={scrollToTop}>
          <ArrowUp />

        </div>
      )}
    </div>
  );
}
