/* eslint-disable no-unused-vars */
const useThrottle = (
  callback: (...args: any) => void,
  delay: number
): (() => void) => {
  let wait = false;

  return (...args: any) => {
    if (wait) {
      return;
    }

    // eslint-disable-next-line n/no-callback-literal
    callback(...args);
    wait = true;

    setTimeout(() => {
      wait = false;
    }, delay);
  };
};

export default useThrottle;
