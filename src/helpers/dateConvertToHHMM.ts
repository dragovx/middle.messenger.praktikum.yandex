export default (d: string): string => {
  const dateMessage = new Date(d);
  const hh = String(dateMessage.getUTCHours()).padStart(2, "0");
  const mm = String(dateMessage.getUTCMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
};
