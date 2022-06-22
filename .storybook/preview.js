//이 파일은 스토리 렌더링 을 구성하는 곳 입니다. 모든 스토리에 적용되는 글로벌 코드에 사용할 수 있습니다.
import React from 'react';
import { loadFontsForStorybook } from '../src/utils/index';

import { GlobalStyle } from '../src/components/shared/global';

export const parameters = {
  // automatically create action args for all props that start with "on"
  actions: { argTypesRegex: '^on.*' },
  dependencies: {
    // display only dependencies/dependents that have a story in storybook
    // by default this is false
    withStoriesOnly: true,

    // completely hide a dependency/dependents block if it has no elements
    // by default this is false
    hideEmpty: true,
  },
};

const withGlobalStyle = (storyFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

export const decorators = [withGlobalStyle];

loadFontsForStorybook();
