import { beginOfWeek, sessionToBinary } from './utils';

class Goal {
  constructor(props) {
    Object.assign(this, props);
  }

  remainingFrequency(now) {
    const tasksExecuted = this.tasks.filter((task) => task.startTime > beginOfWeek(now));
    return this.frequency - tasksExecuted.length;
  }

  remainingTimes(availableTime, now, hours) {
    return sessionToBinary(this.session, now, hours) & availableTime;
  }
}

export default Goal;
