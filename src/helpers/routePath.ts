export default (path: string): boolean => {
  return path == window.location.hash;
};
