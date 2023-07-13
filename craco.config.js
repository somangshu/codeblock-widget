module.exports = {
    webpack: {
      configure: (webpackConfig, { env, paths }) => {
        webpackConfig.optimization.splitChunks = {
          cacheGroups: {
            default: false,
          },
        };
        webpackConfig.module.rules[1].oneOf.unshift({
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        });
  
        webpackConfig.optimization.runtimeChunk = false;
  
        return webpackConfig;
      },
    },
  };