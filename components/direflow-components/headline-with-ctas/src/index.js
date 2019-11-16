import DireflowComponent from 'direflow-component';
import { componentAttributes, componentProperties } from './componentProperties';
import HeadlineWithCtas from './HeadlineWithCtas';

DireflowComponent.setAttributes(componentAttributes);
DireflowComponent.setProperties(componentProperties);
DireflowComponent.render(HeadlineWithCtas, 'headline-with-ctas');
