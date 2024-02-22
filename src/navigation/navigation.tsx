import Home from '../screens/Home/Home';
import Login from '../screens/Auth/Login';
import Registration from '../screens/Auth/Registration';
import CalendarPage from '../screens/CalendarPage';
import SocialsPage from '../screens/SocialsPage';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Registration: undefined;
  CalendarPage: undefined;
  SocialsPage: undefined;
};
export const stackroutes = [
  {
    title: 'Home',
    component: Home,
    options: {
      gestureEnabled: false,
    },
  },
  {
    title: 'Login',
    component: Login,
    options: {
      gestureEnabled: false,
    },
  },
  {
    title: 'Registration',
    component: Registration,
    options: {
      gestureEnabled: false,
    },
  },
  {
    title: 'CalendarPage',
    component: CalendarPage,
    options: {
      gestureEnabled: false,
    },
  },
  {
    title: 'SocialsPage',
    component: SocialsPage,
    options: {
      gestureEnabled: false,
    },
  },
];
