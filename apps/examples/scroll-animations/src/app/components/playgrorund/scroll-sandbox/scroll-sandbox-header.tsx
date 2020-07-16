import React, { useState, useRef } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { GridOnOutlined, GridOffOutlined, ArrowDropDown } from '@material-ui/icons';

const options = [
  { label: '50%', value: 0.5 },
  { label: '75%', value: 0.75 },
  { label: '100%', value: 1 },
];

const ScrollSandboxHeader = (props: any) => {
  const {showGuideGrid, toggleGuideGrid, zoom, setZoomValue} = props;

  /** Gride Guide */
  // const [showGuideGrid, toggleGuideGrid] = useState(true);
  const onGuideGrigButtonClick = (event) => {
    toggleGuideGrid(!showGuideGrid);
  };

  /** Zoom Value */
  // const [zoom, setZoomValue] = useState({ label: '100%', value: 1 });

  /** Zoom Menu */
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, option) => {
    setZoomValue(option);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <AppBar color="default" position="fixed">
      <ToolBar>

        <Button variant="outlined" onClick={onGuideGrigButtonClick}>
          {showGuideGrid ? (<GridOffOutlined/>) : (<GridOnOutlined/>)}
        </Button>

        <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
          <Button onClick={handleClick}>{zoom && zoom.label}</Button>
          <Button
            size="small"
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-label="select zoon"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            <ArrowDropDown />
            {/* Test */}
          </Button>
        </ButtonGroup>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu">
                    {options.map((option, index) => (
                      <MenuItem
                        key={index}
                        selected={String(zoom.value) === String(option.value)}
                        onClick={(event) => handleMenuItemClick(event, option)}
                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </ToolBar>
    </AppBar>
  )
}

/** @internal */
export default ScrollSandboxHeader;
