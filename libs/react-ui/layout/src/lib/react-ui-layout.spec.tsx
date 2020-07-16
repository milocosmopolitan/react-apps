import React from 'react';
import { render } from '@testing-library/react';

import ReactUiLayout from './react-ui-layout';

describe(' ReactUiLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactUiLayout />);
    expect(baseElement).toBeTruthy();
  });
});
