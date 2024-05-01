const useThrottle = (
  callback: (...args: unknown[]) => void,
  delay: number,
): (() => void) => {
  let wait = false;

  return (...args: unknown[]) => {
    if (wait) {
      return;
    }

    callback(...args);
    wait = true;

    setTimeout(() => {
      wait = false;
    }, delay);
  };
};

export default useThrottle;
