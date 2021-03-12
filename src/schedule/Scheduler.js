import { ceilTime, displayBinary, newTimes } from './utils';

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
    let result = newTimes(this.hours);
    this.tasks.forEach((task) => {
      result &= ~task.times(this.now, this.hours);
    });
    return result;
  }

  schedule() {
    this.sortGoals();
    this.tasks = [];
    let changed = true;
    while (changed) {
      changed = false;
      for (const goal of this.goals) {
        const task = goal.scheduleOneTask(
          this.now, this.hours, this.remainingTimes(),
        );
        if (task) {
          this.tasks.push(task);
          changed = true;
        }
      }
    }
    this.sortTasks();
    return this.tasks;
  }
}

export default Scheduler;
