import Table from 'terminal-table';

const hour = 1000 * 60 * 60;

const ShowTasks = (now, tasks) => {
  const hours = 24 * 7;
  const table = new Array(hours).fill('');
  tasks.sort((a, b) => a.startTime - b.startTime);
  tasks.forEach((task) => {
    const begin = Math.floor((task.startTime - now) / hour);
    const end = Math.ceil((task.endTime - now) / hour);
    for (let i = 0; i < hours; i += 1) {
      if (begin <= i && i < end) {
        table[i] = `${i % 24} ${task.name}`;
      }
    }
  });
  const t = new Table();
  const d = new Date(now);
  for (let i = 0; i < 7; i += 1) {
    d.setDate(d.getDate() + 1);
    t.insertColumn(i, [d.toLocaleDateString(), ...table.splice(0, 24)]);
  }
  return t.toString();
};

export default ShowTasks;
