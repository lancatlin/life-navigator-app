class Scheduler {
  constructor(goals, now) {
    this.now = now;
    this.goals = goals;
    this.tasks = [];
    this.times = BigInt(2 ** (24 * 6 * 7) - 1);
  }

  sortGoals() {
    this.goals.sort((a, b) => a.expireAt - b.expireAt);
  }

  sortTasks() {
    this.tasks.sort((a, b) => a.startTime - b.startTime);
  }

  remainingTimes() {
    this.times = new Array(7).fill(BigInt(2 ** (24 * 6) - 1));
    const beginDate = this.now.getDate();
    this.tasks.forEach((task) => {});
  }
}

export default Scheduler;
