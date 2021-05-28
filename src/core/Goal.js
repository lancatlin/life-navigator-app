import Task from './Task';
import { beginOfWeek, timeUnitToDate } from './utils';
import TimeBinary from './TimeBinary';

class Goal {
  constructor(props) {
    const { tasks, ...properties } = props;
    Object.assign(this, properties);
    this.tasks = tasks ? [...props.tasks] : [];
  }

  static fromList(goalsData) {
    const result = [];
    for (const goalData of goalsData) {
      result.push(new Goal(goalData));
    }
    return result;
  }

  progress() {
    return (this.executedTime / this.duration) * 100;
  }

  remainingFrequency(t) {
    const tasksExecuted = this.tasks.filter((task) => task.startTime > beginOfWeek(t));
    return this.frequency - tasksExecuted.length;
  }

  remainingTimes(now, hours, availableTime) {
    return this.session.toBinary(now, hours)
      .mix(availableTime)
      .mix(this.ignoreTimes(now, hours).not());
  }

  ignoreTimes(now, hours) {
    let result = TimeBinary.blankTime(now, hours).not();
    for (const task of this.tasks) {
      result = task.ignoreTimes(now, hours).union(result);
    }
    return result;
  }

  scheduleOneTask(now, hours, availableTime) {
    const remaining = this.remainingTimes(now, hours, availableTime);
    let count = 0;
    for (let i = 0; i < hours * 6; i += 1) {
      const current = remaining.array[i];
      count = current ? count + 1 : 0;
      if (count === this.eachTime * 6
        && this.remainingFrequency(timeUnitToDate(now, i - count)) > 0) {
        const task = Task.createTaskFromTimeUnit(
          now, i - count + 1, i + 1, { goalId: this.id, name: this.name },
        );
        this.tasks.push(task);
        return task;
      }
    }
    return null;
  }
}

export default Goal;
