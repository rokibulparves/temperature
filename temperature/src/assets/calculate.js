export function ToCelcious(temperature) {
  return ((temperature - 32) * 5) / 9;
}

export function Tofahrenheit(temperature) {
  return temperature * (9 / 5) + 32;
}

export function convertTO(temperature, myFunc) {
  const temp = myFunc(parseFloat(temperature));
  if (isNaN(temp)) return "";

  const round = Math.round(temp * 1000) / 1000;
  return round.toString();
}

export default { ToCelcious, Tofahrenheit, convertTO };
