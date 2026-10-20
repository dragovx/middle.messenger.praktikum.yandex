export default (...args) => {
  args.pop();
  return args.some(Boolean);
};
