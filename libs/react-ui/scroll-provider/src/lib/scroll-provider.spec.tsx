import React from 'react';
import { render } from '@testing-library/react';

import {ScrollProvider} from './scroll-provider';

describe(' ReactUiScrollProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScrollProvider>Hello</ScrollProvider>);
    expect(baseElement).toBeTruthy();
  });
});
