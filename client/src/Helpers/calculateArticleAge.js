const calculateArticleAge = date => {
  let datePublished = new Date(date).getTime();
  let dateNow = new Date().getTime();
  let milliseconds = dateNow - datePublished;
  let hours = Math.round(milliseconds / 1000 / 60 / 60);

  return hours >= 24 ? calculateDays(hours) : calculateHours(hours);
};

const calculateDays = hours => {
  let days = Math.round(hours / 24);
  return days < 2 ? `${days} day ago` : `${days} days ago`;
};

const calculateHours = hours => {
  return hours < 2 ? `${hours} hr ago` : `${hours} hrs ago`;
};

module.exports = calculateArticleAge;
