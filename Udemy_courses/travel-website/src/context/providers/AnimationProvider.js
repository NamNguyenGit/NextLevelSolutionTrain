import AnimationContext from "../AnimationContext";
import { useEffect } from "react";
const AnimationProvider = ({ children }) => {
  const scrollAnimations = () => {
    const animation = (elements, className) => {
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const viewPortHeight = window.innerHeight - 150;
        if (elementPosition < viewPortHeight) {
          element.classList.add(className);
        } else {
          element.classList.remove(className);
        }
      });
    };
    const elements = document.querySelectorAll(".animation");
    const headngElements = document.querySelectorAll(".headingAnimation");
    animation(elements, "animate");
    animation(headngElements, "headingAnimate");
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollAnimations);
  }, []);
  return (
    <AnimationContext.Provider value>{children}</AnimationContext.Provider>
  );
};

export default AnimationProvider;
