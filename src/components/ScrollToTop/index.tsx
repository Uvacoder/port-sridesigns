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
        <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-400 rounded-md p-0.5 fixed bottom-6 right-6 z-50 shadow cursor-pointer" >
          <button className="bg-white dark:bg-darkblack transition duration-200 ease-linear rounded w-full p-2" onClick={scrollToTop}>
            <ArrowUp />

          </button>
        </div>
      )}
    </div>
  );
}
