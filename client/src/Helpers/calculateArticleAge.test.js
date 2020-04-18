const calculateArticleAge = require("./calculateArticleAge");

describe("calculateArticleAge", () => {
  it("exists", () => {
    expect(typeof calculateArticleAge).toBe("function");
  });

  it("should return the age in days", () => {
    const dateNow = new Date().getTime();
    const publicationDate = dateNow - 86400000; // Minus 1 day
    const articleAge = calculateArticleAge(publicationDate);
    expect(articleAge).toEqual("1 day ago");
  });
});
