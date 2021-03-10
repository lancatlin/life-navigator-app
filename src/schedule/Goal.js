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
    return sessionToBinary(this.session, now, hours) & availableTime;
  }

  scheduleOneTask(now, hours, availableTime) {
    console.log(now, hours);
    const remaining = this.remainingTimes(now, hours, availableTime);
    console.log(remaining.toString(2));
    let count = 0;
    for (let i = hours * 6; i >= 0; i -= 1) {
      const current = (remaining >> BigInt(i)) % 2n;
      count = current === 1n ? count + 1 : 0;
      console.log(count);
      if (count === this.eachTime * 6) {
        return new Task().setTimeFromTimeUnit(now, i - count + 1, i);
      }
    }
    return null;
  }
}

export default Goal;
