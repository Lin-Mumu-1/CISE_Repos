module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // 模拟浏览器环境（React 需此配置）
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy', // 处理 CSS 模块
  },
};