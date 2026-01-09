import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

register(StyleDictionary, {
  excludeParentKeys: true,
});

const sd = new StyleDictionary({
  source: ['src/data.json'],
  preprocessors: ['tokens-studio'],
  platforms: {
    // 일반 CSS 변수용 설정
    css: {
      transformGroup: 'tokens-studio',
      buildPath: 'src/styles/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
        },
      ],
    },
  },
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
