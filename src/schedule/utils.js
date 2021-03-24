const timeUnit = 1000 * 60 * 10; // ten minutes

const beginOfWeek = (date) => {
  const first = date.getDate() - date.getDay();
  return new Date(new Date(date).setDate(first));
};

const ceilTime = (t) => {
  const left = t % timeUnit;
  return left === 0 ? t : t - left + timeUnit;
};

const tomorrow = (date) => {
  const result = new Date(
    new Date(date).setDate(date.getDate() + 1),
  );
  result.setHours(0, 0, 0, 0);
  return result;
};

export {
  timeUnit,
  ceilTime,
  beginOfWeek,
  tomorrow,
};
