import Task from './Task';
import { beginOfWeek, sessionToBinary, timeUnitToDate } from './utils';

class Goal {
  constructor(props) {
    const { tasks, ...properties } = props;
    Object.assign(this, properties);
    this.tasks = tasks ? [...props.tasks] : [];
  }

  remainingFrequency(t) {
    const begin = beginOfWeek(t);
    const tasksExecuted = this.tasks.filter((task) => task.startTime > beginOfWeek(t));
    return this.frequency - tasksExecuted.length;
  }

  remainingTimes(now, hours, availableTime) {
    return sessionToBinary(now, hours, this.session)
      & availableTime
      & ~this.ignoreTimes(now, hours);
  }

  ignoreTimes(now, hours) {
    let result = 0n;
    for (const task of this.tasks) {
      result |= task.ignoreTimes(now, hours);
    }
    return result;
  }

  scheduleOneTask(now, hours, availableTime) {
    const remaining = this.remainingTimes(now, hours, availableTime);
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
