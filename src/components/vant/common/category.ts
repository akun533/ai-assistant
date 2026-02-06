import { ComponentCategory } from '../../../core/component-registry.js';

const categoryMap: Record<string, ComponentCategory> = {
  input: 'form',
  textarea: 'form',
  password: 'form',
  stepper: 'form',
  radio: 'form',
  checkbox: 'form',
  select: 'form',
  picker: 'form',
  cascader: 'form',
  switch: 'form',
  rate: 'form',
  slider: 'form',
  datePicker: 'form',
  timePicker: 'form',
  upload: 'form',
  uploader: 'form',
  row: 'layout',
  col: 'layout',
  card: 'layout',
  collapse: 'layout',
  tabs: 'layout',
  form: 'layout',
  cell: 'layout',
  cellGroup: 'layout',
  button: 'assist',
  span: 'assist',
  divider: 'assist',
  html: 'assist',
};

export default categoryMap;
