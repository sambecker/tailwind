import { useEffect } from 'react';

const useElementClasses = (classes: string, element?: HTMLElement) => {
  useEffect(() => {
    const bodyClasses = classes.split(' ');
    if (element) {
      for (const bodyClass of bodyClasses) {
        element.classList.add(bodyClass);
      }
      return () => {
        for (const bodyClass of bodyClasses) {
          element.classList.remove(bodyClass);
        }
      };
    }
  }, [element, classes]);
};

export default useElementClasses;
