import { timeToBinary, tomorrow } from './utils';

class Task {
  constructor(props) {
    Object.assign(this, props);
  }

  times(now, hours) {
    return timeToBinary(now, hours, this.startTime, this.endTime);
  }

  ignoreTimes(now, hours) {
    return timeToBinary(now, hours, this.startTime, tomorrow(this.startTime));
  }

  static createTaskFromTimeUnit(now, start, end, props = null) {
    const task = new Task(props);
    task.startTime = new Date(new Date(now).setMinutes(now.getMinutes() + start * 10));
    task.endTime = new Date(new Date(now).setMinutes(now.getMinutes() + end * 10));
    return task;
  }
}

export default Task;
