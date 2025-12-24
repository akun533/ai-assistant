import validateFeature from './validate/index';
import computedFeature from './computed/index';
import controlFeature from './control/index';
import eventFeature from './event/index';

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
