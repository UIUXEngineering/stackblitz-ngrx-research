module.exports = {
  name: 'feature-a',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/feature-a',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
