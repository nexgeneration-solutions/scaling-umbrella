import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { NativeModules } from 'react-native';

Enzyme.configure({ adapter: new Adapter() });

NativeModules.DeviceInfo.Dimensions.window.fontScale = 1;
NativeModules.DeviceInfo.Dimensions.window.scale = 1;
