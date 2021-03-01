class Goal {
  constructor(props) {
    Object.assign(this, props);
  }

  remainingTimes(now) {
    const tasksExecuted = this.tasks.filter((task) => task.startTime > beginOfWeek(now));
    return this.frequency - tasksExecuted.length;
  }
}

export const beginOfWeek = (date) => {
  const first = date.getDate() - date.getDay();
  return new Date(date.setDate(first));
};

export default Goal;
