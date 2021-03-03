class Scheduler {
  constructor(now, hours, goals = []) {
    this.now = now;
    this.hours = hours;
    this.goals = goals;
    this.tasks = [];
  }

  sortGoals() {
    this.goals.sort((a, b) => a.expireAt - b.expireAt);
  }

  sortTasks() {
    this.tasks.sort((a, b) => a.startTime - b.startTime);
  }

  remainingTimes() {
    let result = BigInt(2 ** (6 * this.hours) - 1);
    this.tasks.forEach((task) => {
      result &= ~task.times(this.now, this.hours);
    });
    return result;
  }
}

export default Scheduler;
