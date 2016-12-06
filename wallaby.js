module.exports = function (wallaby) {
  return {
    files: [
      './app.js'
    ],
    tests: [
      './test.js'
    ],
    env: {
      type: 'node'
    },
    compilers: {
      '**/*.js': wallaby.compilers.babel()
    }
  };
}
