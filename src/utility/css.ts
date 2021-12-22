export const joinClasses = (
  classes: (string | boolean | undefined)[],
): string =>
  classes
    .filter(s => typeof s === 'string' && s)
    .join(' ');
