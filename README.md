# react-native-evaluate-component-size

Thanks to [matto1990](https://stackoverflow.com/users/99582/matto1990) for [solution](https://stackoverflow.com/questions/56738500/react-native-onlayout-with-react-hooks)

```

import { useComponentSize } from 'spacing'

...

const myComponent = ()=> {
  const [calculatedSize, setSize] = useState( {} );
  const onLayout = useComponentSize([calculatedSize, setSize]);

...

 // Use various combinations of minWidth, minHeight (highest specificity), maxWidth, maxHeight, width, height
 // for your purpose.
 // This one guarantees a square of size : size
  <View
    style= { minHeight: calculatedSize.height || size, minWidth: calculatedSize.height || size }
  />
```

NB - the component will render twice, once with the fallback `size` and the second time with the values calculated from the first render.
