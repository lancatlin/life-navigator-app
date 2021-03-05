const timeUnit = 1000 * 60 * 10; // ten minutes

const timeToBinary = (now, hours, startTime = null, endTime = null) => {
  const begin = startTime
    ? Math.floor((startTime - now) / timeUnit)
    : 0;
  const end = endTime
    ? Math.ceil((endTime - now) / timeUnit)
    : 24 * 6;
  let result = BigInt(0);
  for (let i = 0; i < hours * 6; i += 1) {
    result <<= 1n;
    result += begin <= i && i < end ? 1n : 0n;
  }
  return result;
};

const ceilTime = (t) => {
  const left = t % timeUnit;
  return left === 0 ? t : t - left + timeUnit;
};

const beginOfWeek = (date) => {
  const first = date.getDate() - date.getDay();
  return new Date(date.setDate(first));
};

const sessionToBinary = (session, now, hours) => {
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

export {
  timeToBinary, ceilTime, beginOfWeek, sessionToBinary,
};