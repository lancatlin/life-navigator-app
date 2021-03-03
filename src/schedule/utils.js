const timeToBinary = (now, hours, startTime = null, endTime = null) => {
  const begin = startTime
    ? Math.floor(getTimeIndex(startTime - now))
    : 0;
  const end = endTime
    ? Math.ceil(getTimeIndex(endTime - now))
    : 24 * 6;
  let result = BigInt(0);
  for (let i = 0; i < hours * 6; i += 1) {
    result <<= 1n;
    result += begin <= i && i < end ? 1n : 0n;
  }
  return result;
};

const getTimeIndex = (t) => t / (1000 * 60 * 10);

export default timeToBinary;
