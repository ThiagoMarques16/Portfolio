import { useEffect } from "react";

export function useIntersectionEffect(classToObserve, classToAdd, direction = "left", delay = 0) {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${classToObserve}`);
    let index = 0;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add(classToAdd);
          }, delay * index++);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
    });

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [classToObserve, classToAdd, direction, delay]);
}
