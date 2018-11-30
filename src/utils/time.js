
export const formatTime = date => {
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${minutes}:${seconds}`;
};

export const passSecond = date =>
  new Date(date.valueOf() - 1000);
