module.exports = {
  coverageDirectory: `../../coverage`,
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `../../__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: ['node_modules', '.cache'],
  testURL: `http://localhost`,
  setupFiles: ['../../jest/setup.js'],
};
