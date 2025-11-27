declare module 'react-simple-maps' {
  import { ReactNode, CSSProperties } from 'react';

  interface ProjectionConfig {
    scale?: number;
    center?: [number, number];
    rotate?: [number, number, number];
  }

  interface ComposableMapProps {
    projection?: string;
    projectionConfig?: ProjectionConfig;
    width?: number;
    height?: number;
    style?: CSSProperties;
    children?: ReactNode;
  }

  interface ZoomableGroupProps {
    zoom?: number;
    center?: [number, number];
    minZoom?: number;
    maxZoom?: number;
    children?: ReactNode;
  }

  interface GeographiesProps {
    geography: string | object;
    children: (data: { geographies: Geography[] }) => ReactNode;
  }

  interface Geography {
    rsmKey: string;
    id: string;
    properties: {
      name?: string;
      [key: string]: unknown;
    };
  }

  interface GeographyStyle {
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    outline?: string;
  }

  interface GeographyProps {
    geography: Geography;
    style?: {
      default?: GeographyStyle;
      hover?: GeographyStyle;
      pressed?: GeographyStyle;
    };
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
  }

  export const ComposableMap: React.FC<ComposableMapProps>;
  export const ZoomableGroup: React.FC<ZoomableGroupProps>;
  export const Geographies: React.FC<GeographiesProps>;
  export const Geography: React.FC<GeographyProps>;
}
