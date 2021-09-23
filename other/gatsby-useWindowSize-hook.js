/* Gatsby window hook
  In gatsby you have error when get window.innerWidth
  This example solve this problem
*/

import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const [dimensions, setDimensions] = useState({
    windowHeight: 0,
    windowWidth: 0,
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handler = () =>
      setDimensions({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
      });
    handler();
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return dimensions;
};

//How use
import React, { useEffect } from 'react';
import { useWindowSize } from './useWindowSize';

const Component = () => {
  const size = useWindowSize();
  useEffect(() => {
    if (size.windowWidth > 768) {
      // do smth
    } else {
      // do any
    }
  }, [size]);

  return <div>Content</div>;
};
