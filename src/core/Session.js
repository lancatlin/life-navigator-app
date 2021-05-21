import TimeBinary from './TimeBinary';

class Session {
  constructor({ id, name, times }) {
    this.id = id;
    this.name = name;
    this.times = times;
  }

  static fromList(sessionsData) {
    const result = [];
    for (const sessionData of sessionsData) {
      result.push(new Session(sessionData));
    }
    return result;
  }

  toBinary(now, hours) {
    const beginDay = now.getDay();
    const beginHour = now.getHours();
    const beginMunites = now.getMinutes() / 10;
    let result = BigInt(0);
    for (let i = beginHour; i < beginHour + hours + 1; i += 1) {
      result <<= BigInt(6);
      const day = (beginDay + Math.floor(i / 24)) % 7;
      const hour = i % 24;
      const current = (this.times[day] >> (23 - hour)) % 2;
      result += current === 1 ? BigInt(0b111111) : BigInt(0);
    }
    result >>= BigInt(6 - beginMunites);
    result %= (BigInt(1) << BigInt(hours * 6));
    return new TimeBinary(now, hours, result);
  }

  static fromHours(start, end, props) {
    let result = 0;
    for (let i = 0; i < 24; i += 1) {
      result <<= 1;
      result += start <= i && i < end ? 1 : 0;
    }

    return new Session({ times: new Array(7).fill(result), ...props });
  }
}

export default Session;
