import validateFeature from './validate/index.js';
import computedFeature from './computed/index.js';
import controlFeature from './control/index.js';
import eventFeature from './event/index.js';

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

export const features = [
  validateFeature,
  controlFeature,
  computedFeature, // 开源版不支持
  eventFeature,
];

const featuresMap: {
    [key: string]: Feature;
} = features.reduce((previousValue: {
    [key: string]: Feature;
}, currentValue) => {
  previousValue[currentValue.name] = currentValue;
  return previousValue;
}, {});

export default featuresMap;
