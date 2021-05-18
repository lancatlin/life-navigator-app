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
      result <<= BigInt(1);
      result += begin <= i && i < end ? BigInt(1) : BigInt(0);
    }
    return new TimeBinary(now, hours, result);
  }

  static blankTime(now, hours) {
    return new TimeBinary(now, hours, (BigInt(1) << BigInt(hours * 6)) - BigInt(1));
  }

  print(print = false) {
    const n = BigInt(1) << BigInt(this.hours * 6);
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
