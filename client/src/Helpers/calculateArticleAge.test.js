const calculateArticleAge = require("./calculateArticleAge");

describe("calculateArticleAge", () => {
  it("exists", () => {
    expect(typeof calculateArticleAge).toBe("function");
  });

  it("should return the age in days", () => {
    const dateNow = new Date().getTime();
    const publicationDate = dateNow - 86400000; // Minus 1 day
    const newsCardArticleAge = calculateArticleAge(publicationDate);
    expect(newsCardArticleAge).toEqual("1 day ago");
  });
});
