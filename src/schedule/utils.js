const timeUnit = 1000 * 60 * 10; // ten minutes

const timeToBinary = (now, hours, startTime = null, endTime = null) => {
  const begin = startTime
    ? Math.floor((startTime - now) / timeUnit)
    : 0;
  const end = endTime
    ? Math.ceil((endTime - now) / timeUnit)
    : hours * 6;
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
  return new Date(new Date(date).setDate(first));
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

const displayBinary = (binary, length) => {
  const n = 1n << BigInt(length);
  const result = (n + binary).toString(2).slice(1);
  console.log(result, result.length);
  return result;
};

const newTimes = (hours) => (1n << BigInt(hours * 6)) - 1n;

const tomorrow = (date) => {
  const result = new Date(
    new Date(date).setDate(date.getDate() + 1),
  );
  result.setHours(0, 0, 0, 0);
  return result;
};
export {
  timeToBinary,
  ceilTime,
  beginOfWeek,
  sessionToBinary,
  displayBinary,
  newTimes,
  tomorrow,
};
