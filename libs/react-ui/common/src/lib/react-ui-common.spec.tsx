import React from 'react';
import { render } from '@testing-library/react';

import ReactUiCommon from './react-ui-common';

describe(' ReactUiCommon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactUiCommon />);
    expect(baseElement).toBeTruthy();
  });
});
