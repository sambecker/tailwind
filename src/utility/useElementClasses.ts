import { useCallback, useEffect, useState } from 'react';

const useElementClasses = (
  classes: string,
  element?: HTMLElement,
  shouldRunOnServer = true,
) => {
  const [hasAppliedOnce, setHasAppliedOnce] = useState(false);

  const addClasses = useCallback(() => {
    const bodyClasses = classes.split(' ');
    setHasAppliedOnce(true);
    for (const bodyClass of bodyClasses) {
      element?.classList.add(bodyClass);
    }
  }, [classes, element]);

  const removeClasses = useCallback(() => {
    const bodyClasses = classes.split(' ');
    for (const bodyClass of bodyClasses) {
      element?.classList.remove(bodyClass);
    }
  }, [classes, element]);

  if (shouldRunOnServer && !hasAppliedOnce) {
    addClasses();
  }

  useEffect(() => {
    addClasses();
    return () => removeClasses();
  }, [addClasses, removeClasses]);
};

export default useElementClasses;
