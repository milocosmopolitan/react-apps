import React from 'react';
import Box from '@material-ui/core/Box';
import { useScrollContext } from '../../common/scroll-provider';

const ScrollSandboxDrawer = (props: any) => {
  const { zoom, viewSize, documentSize } = props;
  const { scrollY, scrolledPercent } = useScrollContext();

  return (
    <Box p="15px">
      <div>zoom: {zoom.value}</div>
      <div>view width: {viewSize.width}px</div>
      <div>view height: {viewSize.height}px</div>
      <hr/>
      <div>document width: {documentSize.width}px</div>
      <div>document height: {documentSize.height}px</div>
      <hr/>
      <div>scrollTop: {scrollY }px</div>
      <div>scrolled: {scrolledPercent}%</div>
    </Box>
  )
}

/** @internal */
export default ScrollSandboxDrawer;
