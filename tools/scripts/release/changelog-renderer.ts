const { defaultChangelogRenderer } = require('nx/release/changelog-renderer');

module.exports = async function (config) {
  const defaultOutput = await defaultChangelogRenderer(config);

  // "Thank You" 섹션과 그 뒤의 내용 제거
  return defaultOutput.replace(/\n### ❤️ {2}Thank You[\s\S]*/g, '').trim();
};
