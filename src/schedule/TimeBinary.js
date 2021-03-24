import { timeUnit } from './utils';

class TimeBinary {
  constructor(now, hours, binary) {
    this.now = now;
    this.hours = hours;
    this.binary = binary;
  }

  static fromTime(now, hours, startTime = null, endTime = null) {
    const begin = startTime
      ? Math.floor((startTime - now) / timeUnit)
      : 0;
    const end = endTime
      ? Math.ceil((endTime - now) / timeUnit)
      : hours * 6;
    let result = BigInt(0);
    for (let i = 0; i < hours * 6; i += 1) {
      result <<= 1n;
      result += begin <= i && i < end ? 1n : 0n;
    }
    return new TimeBinary(now, hours, result);
  }

  print(print = false) {
    const n = 1n << BigInt(this.hours * 6);
    const result = (n + this.binary).toString(2).slice(1);
    if (print) {
      console.log(result, result.length);
    }
    return result;
  }

  mix(t) {
    return new TimeBinary(this.now, this.hours, this.binary & t.binary);
  }

  not() {
    return new TimeBinary(this.now, this.hours, ~this.binary);
  }

  union(t) {
    return new TimeBinary(this.now, this.hours, this.binary | t.binary);
  }
}

export default TimeBinary;
