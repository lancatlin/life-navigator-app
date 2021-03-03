import timeToBinary from './utils';

class Task {
  constructor(props) {
    Object.assign(this, props);
  }

  times(now, hours) {
    return timeToBinary(now, hours, this.startTime, this.endTime);
  }
}

export default Task;
