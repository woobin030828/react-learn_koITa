// craco.config.js
module.exports = {
  devServer: {
    client: {
      webSocketURL: {
        hostname: 'code-server.ideaflow.co.kr',
        pathname: '/ws',
        protocol: 'wss',
        port: 443,
      },
    },
  },
};