import DireflowComponent from 'direflow-component';
import { componentAttributes, componentProperties } from './componentProperties';
import SimpleBanner from './SimpleBanner';

DireflowComponent.setAttributes(componentAttributes);
DireflowComponent.setProperties(componentProperties);
DireflowComponent.render(SimpleBanner, 'simple-banner');
