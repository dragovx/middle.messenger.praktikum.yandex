type Message = {
  time: string | number;
};

type Item = {
  lastMessage: Message;
};

export default <T extends Item>(array: T[]): T[] => {
  return [...array].sort((a, b) =>
    String(b.lastMessage.time).localeCompare(String(a.lastMessage.time)),
  );
};
