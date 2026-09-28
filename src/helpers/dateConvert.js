export default (d) => {
  const dateNow = new Date("2026-09-25T21:34:00.000Z");
  const dateMessage = new Date(d);

  const diffMs = dateNow.getTime() - dateMessage.getTime();
  const diffSec = Math.floor(diffMs / 1000);

  if (diffSec < 60) return "только что";

  const diffMin = Math.floor(diffSec / 60);

  if (diffMin > 1 && diffMin < 1440)
    return dateMessage.getHours() + ":" + dateMessage.getMinutes();

  const weekDays = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  if (diffMin >= 1440 && diffMin < 10080) return weekDays[dateMessage.getDay()];

  const m = [
    "янв",
    "фев",
    "мар",
    "апр",
    "мая",
    "июн",
    "июл",
    "авг",
    "сен",
    "окт",
    "ноя",
    "дек",
  ];
  if (diffMin >= 10080)
    return (
      dateMessage.getDate() +
      " " +
      m[dateMessage.getMonth()] +
      " " +
      dateMessage.getFullYear()
    );
};
