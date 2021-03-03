import timeToBinary from './utils';

class Task {
  constructor(props) {
    Object.assign(this, props);
  }

  times(now) {
    return timeToBinary(now, this.startTime, this.endTime);
  }
}

export default Task;
