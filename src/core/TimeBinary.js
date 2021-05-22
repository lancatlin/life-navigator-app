import { timeUnit } from './utils';

class TimeBinary {
  constructor(now, hours, array) {
    this.now = now;
    this.hours = hours;
    if (typeof array === 'string') {
      this.array = TimeBinary.fromString(array);
    } else {
      this.array = array;
    }
  }

  static fromTime(now, hours, startTime = null, endTime = null) {
    const begin = startTime
      ? Math.floor((startTime - now) / timeUnit)
      : 0;
    const end = endTime
      ? Math.ceil((endTime - now) / timeUnit)
      : hours * 6;
    const result = new Array(hours * 6).fill(false);
    for (const i in result) {
      result[i] = begin <= i && i < end;
    }
    return new TimeBinary(now, hours, result);
  }

  static blankTime(now, hours) {
    return new TimeBinary(now, hours, new Array(hours * 6).fill(1));
  }

  static fromString(now, s) {
    const result = new Array(s.length).fill(false);
    for (const i in s) {
      result[i] = s[i] === '1';
    }
    return new TimeBinary(now, result.length, result);
  }

  toString() {
    return this.array.map((value) => (value ? '1' : '0')).join('');
  }

  print() {
    console.log(this.toString(), this.array.length);
  }

  mix(t) {
    const result = this.array.map((value, i) => (value && t.array[i]));
    return new TimeBinary(this.now, this.hours, result);
  }

  not() {
    const result = this.array.map((value) => (!value));
    return new TimeBinary(this.now, this.hours, result);
  }

  union(t) {
    const result = this.array.map((value, i) => (value || t.array[i]));
    return new TimeBinary(this.now, this.hours, result);
  }
}

export default TimeBinary;
