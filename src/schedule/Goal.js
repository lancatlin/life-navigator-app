class Goal {
  constructor(props) {
    Object.assign(this, props);
  }

  remainingTimes(now) {
    const tasksExecuted = this.tasks.filter((task) => task.startTime > beginOfWeek(now));
    return this.frequency - tasksExecuted.length;
  }

  loadSession(now, hours) {
    const beginDay = now.getDay();
    const beginHour = now.getHours();
    const beginMunites = now.getMinutes() / 10;
    let result = BigInt(0);
    for (let i = beginHour; i < beginHour + hours + 1; i += 1) {
      result <<= 6n;
      const day = (beginDay + Math.floor(i / 24)) % 7;
      const hour = i % 24;
      const current = (this.session[day] >> (23 - hour)) % 2;
      result += current === 1 ? 0b111111n : 0n;
    }
    result >>= BigInt(6 - beginMunites);
    return result % BigInt(2 ** (hours * 6));
  }
}

export const beginOfWeek = (date) => {
  const first = date.getDate() - date.getDay();
  return new Date(date.setDate(first));
};

export default Goal;
