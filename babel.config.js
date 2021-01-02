const presets = [
  // 转为es5
  ['@babel/preset-env', {
    "useBuiltIns": "usage",
    "corejs": '3.8.1'
  }]
]
const plugins = [
  ['@babel/plugin-transform-runtime', {
    'corejs': 3
  }],
  '@babel/plugin-proposal-optional-chaining',
]

module.exports = {presets, plugins};