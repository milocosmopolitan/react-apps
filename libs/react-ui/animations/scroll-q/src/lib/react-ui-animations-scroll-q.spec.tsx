import React from 'react';
import { render } from '@testing-library/react';

import ScrollQueueContainer from './react-ui-animations-scroll-q';

describe(' ReactUiAnimationsScrollQ', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScrollQueueContainer />);
    expect(baseElement).toBeTruthy();
  });
});
