import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2187744Navigator from '../features/BlankScreen2187744/navigator';
import BlankScreen1187743Navigator from '../features/BlankScreen1187743/navigator';
import BlankScreen0187742Navigator from '../features/BlankScreen0187742/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
