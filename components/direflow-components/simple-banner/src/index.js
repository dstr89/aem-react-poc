import DireflowComponent from 'direflow-component';
import { componentAttributes, componentProperties } from './componentProperties';
import SimpleBanner from './SimpleBanner';

DireflowComponent.setAttributes(componentAttributes);
DireflowComponent.setProperties(componentProperties);

var option = {};
option.shadow = false;
DireflowComponent.render(SimpleBanner, 'simple-banner', option);
