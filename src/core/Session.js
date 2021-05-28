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
    const beginMunites = Math.floor(now.getMinutes() / 10);
    const result = [];
    for (let i = beginHour; i < beginHour + hours + 1; i += 1) {
      const day = (beginDay + Math.floor(i / 24)) % 7;
      const hour = i % 24;
      const current = this.times[day][hour];
      const push = new Array(6).fill(current === '1');
      result.push(...push);
    }
    return new TimeBinary(now, hours, result.slice(beginMunites, beginMunites - 6));
  }

  static fromHours(start, end, props) {
    let result = '';
    for (let i = 0; i < 24; i += 1) {
      result += start <= i && i < end ? '1' : '0';
    }

    return new Session({ times: new Array(7).fill(result), ...props });
  }
}

export default Session;
