class Schedule {
  constructor(goals, now) {
    this.now = now;
    this.goals = goals;
    this.tasks = [];
  }

  sortGoals() {
    this.goals.sort((a, b) => a.expireAt - b.expireAt);
  }

  sortTasks() {
    this.tasks.sort((a, b) => a.startTime - b.startTime);
  }
}

export default Schedule;
