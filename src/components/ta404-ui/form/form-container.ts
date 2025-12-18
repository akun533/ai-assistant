import fieldsConfig from './fieldsConfig';
import { TaComponent, TaComponentGroup } from '../vue2';


const cloneFieldsConfig: TaComponentGroup[] = JSON.parse(JSON.stringify(fieldsConfig));

const formContainer: TaComponent   =   {
  'type': 'form-container',
  'formConfig': {
    'layout': 'horizontal',
    'layoutCol': 'auto',
    'labelCol': 6,
    'wrapperCol': 18,
    'header': '0px',
    'footer': '0px',
    'left': '0px',
    'right': '0px',
    'gutter': 0,
    'previewDrawerWidth': '95%',
    'previewDrawerMinWidth': '',
    'showButton': true,
    'buttons': [],
    'backgroundColor': 'white',
    'initMethod': '',
    'functions': '',
    'isLabelWidth': true,
    'labelWidth': 120,
  },
  'formColumns': [],
  'formHeader': [],
  'formLeft': [],
  'formRight': [],
  'formFooter': [],
  'version': {
    'updateTime': 1766025935700,
  },
};

for (const fieldIndex in cloneFieldsConfig ) {
  const field: TaComponentGroup = cloneFieldsConfig[fieldIndex];
  if (field.type === 'layout') {
    field.list.push(formContainer)
  }
}

export default cloneFieldsConfig;

