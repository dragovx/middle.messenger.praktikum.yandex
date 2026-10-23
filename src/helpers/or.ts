export default (...args: [string]): boolean => {
  args.pop();
  return args.some(Boolean);
};
