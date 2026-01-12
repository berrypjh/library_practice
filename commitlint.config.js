module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Type(태그)의 종류를 제한 (레벨: 0=무시, 1=경고, 2=에러)
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'design', 'style', 'refactor', 'test', 'chore', 'revert'],
    ],
    // Subject가 비어있으면 안 됨
    'subject-empty': [2, 'never'],
    // Type이 비어있으면 안 됨
    'type-empty': [2, 'never'],
  },
};
