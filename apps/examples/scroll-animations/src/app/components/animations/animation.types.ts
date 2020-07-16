import {ReactNode} from 'react';
import * as CSS from "csstype";

export type CSSProperties = CSS.Properties<string | number>;

/** unused */
export interface TransitionIn {
  entering?: CSSProperties
  exiting?: CSSProperties
  entered?: CSSProperties
  exited?: CSSProperties
}
/**
 * For now, tried using same keys as react-transition-group for usability.
 */
export interface AnimationBoxClassNames {
  appear?: string;
  appearActive?: string;
  appearDone?: string;
  enter?: string;
  enterActive?: string;
  enterDone?: string;
  exit?: string;
  exitActive?: string;
  exitDone?: string;
}

export enum AnimationType {
  // uses scroll to control animation key frame
  BoundToScroll = 'bound-to-scroll',
  // triggered by scroll top
  TriggerByScroll = 'trigger-by-scroll'

}

export type StyleFunction = (event?: any) => Style;

export interface Style extends CSS.Properties, CSS.PropertiesHyphen { }

export type TransitionFunction = (event?: any) => number;

export type CubicBezierFn = (x1: number, y1: number, x2: number, y: number) => string;
