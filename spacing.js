import React, { useCallback }  from 'react';

// React Native hack to evaluate width / height dynamically.
// See also onLayout param to Image and definition at thye top of Icon
const useComponentSize = ([calculatedSize, setSize]) => {

  const onLayout = useCallback(event => {
    console.log(event);
    const { width, height } = event.nativeEvent.layout;
    console.log('calculatedSize was',calculatedSize, `now ${width}, ${height}` );
    setSize({ width, height });
  }, []);
  return onLayout;
};

export { useComponentSize }
