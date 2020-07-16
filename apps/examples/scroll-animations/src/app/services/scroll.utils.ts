import { DocumentUtils, WindowUtils } from './utils';

/**
 * Static utility methods for scroll
 *
 * !Important Notes
 *  - try to write with minimum dependencies,
 *    even detach from the React so
 *    it can be used across any javascript framework
 */

export class ScrollUtils {

  static GetScrollY: () => number = () => {
    
    const _isClient = WindowUtils.IsClient();
    const _hasDocument = DocumentUtils.HasDocument();
    const _hasScrollYProp = !!window.scrollY;  // No IE8

    return _isClient && _hasScrollYProp
      ? window.scrollY
      : _hasDocument ? document.body.scrollTop || document.documentElement.scrollTop : 0;
  }

  static GetScrollPercentage: () => number = () => {
    const _hasDocument = DocumentUtils.HasDocument();
    const top = ScrollUtils.GetScrollY();
    const height = _hasDocument
      ? document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      : 0;

    return (top && height) ? top / height : 0;
  }
}
