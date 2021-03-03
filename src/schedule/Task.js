class Task {
  constructor(props) {
    Object.assign(this, props);
  }

  times() {
    const begin = Math.floor(
      (this.startTime.getHours() * 60 + this.startTime.getMinutes()) / 10
    );
    const end = Math.ceil(
      (this.endTime.getHours() * 60 + this.endTime.getMinutes()) / 10
    );
    let result = BigInt(0);
    for (let i = 0; i < 24 * 6; i++) {
      result <<= 1n;
      result += begin <= i && i < end ? 1n : 0n;
    }
    return result;
  }
}

export default Task;
