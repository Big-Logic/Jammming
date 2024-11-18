export const calculationDuration = function (miliseconds) {
  const hours = miliseconds / 1000 / 60 / 60;

  const minutes = (hours % 1) * 60;

  const seconds = (minutes % 1) * 60;

  return {
    hr: Math.floor(hours),
    min: Math.floor(minutes),
    sec: Math.floor(seconds),
  };
};
