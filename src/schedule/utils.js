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

export { timeToBinary, ceilTime };
