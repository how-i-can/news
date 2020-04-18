const calculateHours = date => {
  let datePublished = new Date(date).getTime();
  let dateNow = new Date().getTime();
  let milliseconds = dateNow - datePublished;
  let hours = Math.round(milliseconds / 1000 / 60 / 60);
  if (hours < 2) {
    return ` ${hours}hr ago`;
  } else {
    return ` ${hours}hrs ago`;
  }
};

module.exports = calculateHours;
