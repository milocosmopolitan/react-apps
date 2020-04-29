import React from 'react';
import { render } from '@testing-library/react';

import {MediaQueryProvider} from './media-query';

describe(' MediaQueryProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MediaQueryProvider>Hello</MediaQueryProvider>);
    expect(baseElement).toBeTruthy();
  });
});
