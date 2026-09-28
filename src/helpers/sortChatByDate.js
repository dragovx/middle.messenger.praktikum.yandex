export default (array) => {
  const sorted = [...array].sort((a, b) =>
    String(b.lastMessage.time).localeCompare(String(a.lastMessage.time)),
  );
  return sorted;
};
