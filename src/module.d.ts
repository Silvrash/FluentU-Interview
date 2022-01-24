declare module '*.bmp' {
  const src: any;
  export default src;
}

declare module '*.gif' {
  const src: any;
  export default src;
}

declare module '*.jpg' {
  const src: any;
  export default src;
}

declare module '*.jpeg' {
  const src: any;
  export default src;
}

declare module '*.png' {
  const src: any;
  export default src;
}

declare module '*.svg' {
  import React from 'react';
  import {TextStyle} from 'react-native';
  import {SvgProps as Props} from 'react-native-svg';

  export type SVGProps = Omit<Props, 'style'> & {
    style?: TextStyle;
    size?: number;
    width?: number;
    height?: number;
  };
  const content: React.FC<SVGProps>;
  export default content;
}
