const { addAfterLoader, loaderByName } = require("@craco/craco");

module.exports = async function () {
  const { default: remarkFrontmatter } = await import("remark-frontmatter");
  const { remarkMdxFrontmatter } = await import("remark-mdx-frontmatter");

  return {
    webpack: {
      configure(webpackConfig) {
        addAfterLoader(webpackConfig, loaderByName("babel-loader"), {
          test: /\.mdx?$/,
          loader: require.resolve("@mdx-js/loader"),
          options: {
            remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
          },
        });
        return webpackConfig;
      },
    },
  };
};
