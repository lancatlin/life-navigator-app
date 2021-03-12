import { ceilTime, displayBinary } from './utils';

class Scheduler {
  constructor(now, hours, goals = []) {
    this.now = ceilTime(now);
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
    let result = (1n << BigInt(this.hours * 6)) - 1n;
    this.tasks.forEach((task) => {
      result &= ~task.times(this.now, this.hours);
    });
    return result;
  }

  schedule() {
    this.sortGoals();
    this.tasks = [];
    displayBinary(this.remainingTimes(), this.hours * 6);
    for (let i = 0; i < 1; i += 1) {
      for (const goal of this.goals) {
        const task = goal.scheduleOneTask(
          this.now, this.hours, this.remainingTimes(),
        );
        if (task) {
          this.tasks.push(task);
        }
        displayBinary(this.remainingTimes(), this.hours * 6);
      }
    }
    this.sortTasks();
    return this.tasks;
  }
}

export default Scheduler;
