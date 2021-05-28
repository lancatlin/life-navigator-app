import TimeBinary from './TimeBinary';
import { ceilTime } from './utils';

class Scheduler {
  constructor(now, hours, goals = []) {
    this.now = ceilTime(now);
    this.hours = hours;
    this.goals = goals;
    this.tasks = [];
    console.log(typeof this.now);
  }

  sortGoals() {
    this.goals.sort((a, b) => a.expireAt - b.expireAt);
  }

  sortTasks() {
    this.tasks.sort((a, b) => a.startTime - b.startTime);
  }

  remainingTimes() {
    let result = TimeBinary.blankTime(this.now, this.hours);
    this.tasks.forEach((task) => {
      result = task.times(this.now, this.hours).not().mix(result);
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
