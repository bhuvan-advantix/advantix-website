
export const setupScrollAnimation = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-active');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
  );
  
  // Target all elements with the animate-on-scroll class
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach((el) => observer.observe(el));
  
  return observer;
};

export const setupScrollAnimationForElement = (element: HTMLElement) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-active');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
  );
  
  // Target all elements with the animate-on-scroll class within the provided element
  const animatedElements = element.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach((el) => observer.observe(el));
  
  return observer;
};
