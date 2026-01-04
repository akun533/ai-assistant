import validateFeature from './validate';
import computedFeature from './computed';
import controlFeature from './control';
import eventFeature from './event';

export interface FeatureTemplate {
    description: string;
    example: any;
}

export interface Feature {
    name: string;
    label: string;
    info: string;
    business?: boolean;
    templates: FeatureTemplate[];
    description: string;
}

export const yinhaiFeatures = [
  validateFeature,
  // controlFeature,
  // computedFeature, // 开源版不支持
  eventFeature,
];

const yinhaiFeaturesMap: {
  [key: string]: Feature;
} = yinhaiFeatures.reduce(
  (
    previousValue: {
      [key: string]: Feature;
    },
    currentValue
  ) => {
    previousValue[currentValue.name] = currentValue;
    return previousValue;
  },
  {}
);

export default yinhaiFeaturesMap;
