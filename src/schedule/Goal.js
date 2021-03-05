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
    let result = BigInt(0);
    for (let i = 0; i < hours; i += 1) {
      result <<= 6n;
      const day = beginDay + Math.floor(i / 24);
      const hour = ((i + beginHour) % 24);
      const current = (this.session[day % 7] >> (23 - hour)) % 2;
      console.log(day, hour, BigInt(this.session[day % 7]).toString(2), current);
      result += current === 1 ? 0b111111n : 0n;
    }
    return result;
  }
}

export const beginOfWeek = (date) => {
  const first = date.getDate() - date.getDay();
  return new Date(date.setDate(first));
};

export default Goal;
