import Goal from './Goal';

const goal = new Goal({
  name: 'test',
  expireAt: Date.now() + 14 * 86400000,
  frequency: 5,
  duration: 20,
  eachTime: 1.5,
  session: new Array(7).fill(65408),
  tasks: [
    {
      startTime: Date.now() - 
    }
  ]
});
