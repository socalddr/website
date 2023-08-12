module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.ignores.add("README.md");
};
