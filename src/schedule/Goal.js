import { beginOfWeek } from './utils';

class Goal {
  constructor(props) {
    Object.assign(this, props);
  }

  remainingTimes(now) {
    const tasksExecuted = this.tasks.filter((task) => task.startTime > beginOfWeek(now));
    return this.frequency - tasksExecuted.length;
  }
}

export default Goal;
