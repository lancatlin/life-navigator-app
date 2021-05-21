import { timeUnit } from './utils';

class TimeBinary {
  constructor(now, hours, array) {
    this.now = now;
    this.hours = hours;
    this.array = array;
  }

  static fromTime(now, hours, startTime = null, endTime = null) {
    const begin = startTime
      ? Math.floor((startTime - now) / timeUnit)
      : 0;
    const end = endTime
      ? Math.ceil((endTime - now) / timeUnit)
      : hours * 6;
    const result = new Array(hours * 6);
    for (const i in result) {
      result[i] = begin <= i && i < end;
    }
    return new TimeBinary(now, hours, result);
  }

  static blankTime(now, hours) {
    return new TimeBinary(now, hours, new Array(hours * 6).fill(1));
  }

  print(print = false) {
    const result = this.array.join('');
    if (print) {
      console.log(result, result.length);
    }
    return result;
  }

  mix(t) {
    return new TimeBinary(this.now, this.hours, this.array & t.binary);
  }

  not() {
    return new TimeBinary(this.now, this.hours, ~this.array);
  }

  union(t) {
    return new TimeBinary(this.now, this.hours, this.array | t.binary);
  }
}

export default TimeBinary;
