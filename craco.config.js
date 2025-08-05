// craco.config.js
module.exports = {
  devServer: {
    client: {
      webSocketURL: {
        hostname: 'react-learn.ideaflow.co.kr',
        pathname: '/ws',
        protocol: 'wss',
        port: 443,
      },
    },
  },
};