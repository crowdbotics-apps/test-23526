import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen12197339Navigator from '../features/BlankScreen12197339/navigator';
import BlankScreen11187772Navigator from '../features/BlankScreen11187772/navigator';
import BlankScreen10187771Navigator from '../features/BlankScreen10187771/navigator';
import BlankScreen9187770Navigator from '../features/BlankScreen9187770/navigator';
import BlankScreen8187750Navigator from '../features/BlankScreen8187750/navigator';
import BlankScreen7187749Navigator from '../features/BlankScreen7187749/navigator';
import BlankScreen6187748Navigator from '../features/BlankScreen6187748/navigator';
import BlankScreen5187747Navigator from '../features/BlankScreen5187747/navigator';
import BlankScreen4187746Navigator from '../features/BlankScreen4187746/navigator';
import BlankScreen3187745Navigator from '../features/BlankScreen3187745/navigator';
import BlankScreen2187744Navigator from '../features/BlankScreen2187744/navigator';
import BlankScreen1187743Navigator from '../features/BlankScreen1187743/navigator';
import BlankScreen0187742Navigator from '../features/BlankScreen0187742/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen12197339: { screen: BlankScreen12197339Navigator },
BlankScreen11187772: { screen: BlankScreen11187772Navigator },
BlankScreen10187771: { screen: BlankScreen10187771Navigator },
BlankScreen9187770: { screen: BlankScreen9187770Navigator },
BlankScreen8187750: { screen: BlankScreen8187750Navigator },
BlankScreen7187749: { screen: BlankScreen7187749Navigator },
BlankScreen6187748: { screen: BlankScreen6187748Navigator },
BlankScreen5187747: { screen: BlankScreen5187747Navigator },
BlankScreen4187746: { screen: BlankScreen4187746Navigator },
BlankScreen3187745: { screen: BlankScreen3187745Navigator },
BlankScreen2187744: { screen: BlankScreen2187744Navigator },
BlankScreen1187743: { screen: BlankScreen1187743Navigator },
BlankScreen0187742: { screen: BlankScreen0187742Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
