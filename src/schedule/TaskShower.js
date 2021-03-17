import Table from 'terminal-table';

const hour = 1000 * 60 * 60;

function reshape(hoursList) {
  const table = [];
  while (hoursList.length) {
    table.push(hoursList.splice(0, 24));
  }
  return table;
}

class TaskShower {
  constructor(now, tasks) {
    this.now = now;
    this.tasks = tasks;
    this.hours = 24 * 7;
  }

  createHoursList() {
    const hoursList = new Array(this.hours).fill('');
    this.tasks.forEach((task) => {
      const begin = Math.floor((task.startTime - this.now) / hour);
      const end = Math.ceil((task.endTime - this.now) / hour);
      for (let i = 0; i < this.hours; i += 1) {
        if (begin <= i && i < end) {
          hoursList[i] = `${i % 24}: ${task.name}`;
        }
      }
    });
    return hoursList;
  }

  run() {
    return reshape(this.createHoursList());
  }

  outputTable() {
    const table = this.run();
    const t = new Table();
    const d = new Date(this.now);

    for (let i = 0; i < 7; i += 1) {
      const dateString = `${d.toLocaleDateString()} ${d.getDay()}`;
      d.setDate(d.getDate() + 1);
      t.insertColumn(i, [dateString, ...table[i]]);
    }
    return t.toString();
  }
}

export default TaskShower;
