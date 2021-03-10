import Task from './Task';
import { beginOfWeek, sessionToBinary } from './utils';

class Goal {
  constructor(props) {
    Object.assign(this, props);
  }

  remainingFrequency(now) {
    const tasksExecuted = this.tasks.filter((task) => task.startTime > beginOfWeek(now));
    return this.frequency - tasksExecuted.length;
  }

  remainingTimes(now, hours, availableTime) {
    return sessionToBinary(now, hours, this.session) & availableTime;
  }

  scheduleOneTask(now, hours, availableTime) {
    const remaining = this.remainingTimes(now, hours, availableTime);
    let count = 0;
    for (let i = 0; i < hours * 6; i += 1) {
      const current = (remaining >> BigInt(24 - i)) % 2n;
      count = current === 1n ? count + 1 : 0;
      if (count === this.eachTime * 6) {
        return Task.createTaskFromTimeUnit(now, i - count, i);
      }
    }
    return null;
  }
}

export default Goal;
