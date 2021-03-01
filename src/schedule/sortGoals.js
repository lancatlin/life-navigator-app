const sortGoals = (goals) => {
  goals.sort((a, b) => a.expireAt - b.expireAt);
};

export default sortGoals;
