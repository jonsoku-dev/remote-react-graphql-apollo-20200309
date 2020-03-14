const mediaQuery = num => {
  const breakpoints = [375, 667, 1024, 1680];
  const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);
  return mq[num];
};

export default mediaQuery;
