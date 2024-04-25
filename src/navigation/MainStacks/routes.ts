// import { HOME_SCREEN } from '@src/contants/screenKeys';
// import Home from '@src/screens/Home';

import { PROFILE_SCREEN } from '../../constants/screenKeys';
import Profile from '../../screens/Profile';

const MainRoutes = [
  {
    key: PROFILE_SCREEN,
    name: PROFILE_SCREEN,
    compoent: Profile,
    screenOptions: Profile.screenOptions,
  },
];

export default MainRoutes;
