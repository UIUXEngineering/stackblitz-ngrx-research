module.exports = {
  name: 'feature-b',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/feature-b',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
