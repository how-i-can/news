const wordCounter = (content) => content.split(" ").length;

const getReadTime = (numberOfWords) => {
  // 275 words per minute is the average reading speed
  return numberOfWords / 275;
};

const readTimeFromContent = (content) => getReadTime(wordCounter(content));

module.exports = readTimeFromContent;
