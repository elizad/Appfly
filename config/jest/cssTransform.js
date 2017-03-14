// This is a custom Jest transformer turning style imports into empty objects.


module.exports = {
  process() {
    return 'module.exports = {};';
  },
  getCacheKey(fileData, filename) {
    // The output is always the same.
    return 'cssTransform';
  },
};
