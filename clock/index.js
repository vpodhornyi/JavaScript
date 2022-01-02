setInterval(logClockTime, 1000);

function logClockTime() {
// Получение строки показания часов в гражданском формате
  const time = getClockTime();
// Очистка показаний консоли и вывод показания часов
  console.clear();
  console.log(time);
}
function getClockTime() {
// Получение текущего времени
  const date = new Date();
// Выстраивание последовательности показания часов
  const time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    ampm: "AM"
  }
// Преобразование показания времени в гражданский формат
  if (time.hours == 12) {
    time.ampm = "PM";
  } else if (time.hours > 12) {
    time.ampm = "PM";
    time.hours -= 12;
  }
// Подстановка 0 к показанию часов, чтобы получалась пара цифр
  if (time.hours < 10) {
    time.hours = "0" + time.hours;
  }
// Подстановка 0 к показанию минут, чтобы получалась пара цифр
  if (time.minutes < 10) {
    time.minutes = "0" + time.minutes;
  }
// Подстановка 0 к показанию секунд, чтобы получалась пара цифр
  if (time.seconds < 10) {
    time.seconds = "0" + time.seconds;
  }
// Придание показаниям часов формата строки "hh:mm:ss tt"
  return time.hours + ":"
    + time.minutes + ":"
    + time.seconds + " "
    + time.ampm;
}
