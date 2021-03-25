import Task from './Task';
import { beginOfWeek, timeUnitToDate } from './utils';
import TimeBinary from './TimeBinary';

class Goal {
  constructor(props) {
    const { tasks, ...properties } = props;
    Object.assign(this, properties);
    this.tasks = tasks ? [...props.tasks] : [];
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
    let result = new TimeBinary(now, hours, 0n);
    for (const task of this.tasks) {
      result = task.ignoreTimes(now, hours).union(result);
    }
    return result;
  }

  scheduleOneTask(now, hours, availableTime) {
    const remaining = this.remainingTimes(now, hours, availableTime).binary;
    let count = 0;
    for (let i = 0; i < hours * 6; i += 1) {
      const current = (remaining >> BigInt(hours * 6 - i)) % 2n;
      count = current === 1n ? count + 1 : 0;
      if (count === this.eachTime * 6
        && this.remainingFrequency(timeUnitToDate(now, i - count)) > 0) {
        const task = Task.createTaskFromTimeUnit(
          now, i - count, i, { goalId: this.id, name: this.name },
        );
        this.tasks.push(task);
        return task;
      }
    }
    return null;
  }
}

export default Goal;
