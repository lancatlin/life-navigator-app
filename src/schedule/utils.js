const timeUnit = 1000 * 60 * 10; // ten minutes

const beginOfWeek = (date) => {
  const first = date.getDate() - date.getDay();
  return new Date(new Date(date).setDate(first));
};

const ceilTime = (t) => {
  const left = t % timeUnit;
  return left === 0 ? t : t - left + timeUnit;
};

const sessionToBinary = (now, hours, session) => {
  const beginDay = now.getDay();
  const beginHour = now.getHours();
  const beginMunites = now.getMinutes() / 10;
  let result = BigInt(0);
  for (let i = beginHour; i < beginHour + hours + 1; i += 1) {
    result <<= 6n;
    const day = (beginDay + Math.floor(i / 24)) % 7;
    const hour = i % 24;
    const current = (session[day] >> (23 - hour)) % 2;
    result += current === 1 ? 0b111111n : 0n;
  }
  result >>= BigInt(6 - beginMunites);
  return result % BigInt(2 ** (hours * 6));
};

const newTimes = (hours) => (1n << BigInt(hours * 6)) - 1n;

const tomorrow = (date) => {
  const result = new Date(
    new Date(date).setDate(date.getDate() + 1),
  );
  result.setHours(0, 0, 0, 0);
  return result;
};

const hoursToSessions = (start, end) => {
  let result = 0;
  for (let i = 0; i < 24; i += 1) {
    result <<= 1;
    result += start <= i && i < end ? 1 : 0;
  }
  return result;
};

export {
  timeUnit,
  ceilTime,
  beginOfWeek,
  sessionToBinary,
  newTimes,
  tomorrow,
  hoursToSessions,
};
