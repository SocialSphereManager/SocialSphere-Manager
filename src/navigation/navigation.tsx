import Home from '../screens/Home/Home';
import Login from '../screens/Auth/Login';
import Registration from '../screens/Auth/Registration';
import CalendarPage from '../screens/CalendarPage';
import SocialsPage from '../screens/SocialsPage';
import PersonalityPage from '../screens/PersonalityPage';
import {IStack} from '../shared/interfaces/navigation';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Registration: undefined;
  CalendarPage: undefined;
  SocialsPage: undefined;
  PersonalityPage: undefined;
};
export const stackRoutes = [
  {
    title: 'Home',
    component: Home,
    options: {
      gestureEnabled: false,
      headerShown: false,
    },
  },
  {
    title: 'Login',
    component: Login,
    options: {
      gestureEnabled: false,
      headerShown: false,
    },
  },
  {
    title: 'Registration',
    component: Registration,
    options: {
      gestureEnabled: false,
      headerShown: false,
    },
  },
  {
    title: 'CalendarPage',
    component: CalendarPage,
    options: {
      gestureEnabled: false,
      headerShown: false,
    },
  },
  {
    title: 'SocialsPage',
    component: SocialsPage,
    options: {
      gestureEnabled: false,
      headerShown: false,
    },
  },
  {
    title: 'PersonalityPage',
    component: PersonalityPage,
    options: {
      gestureEnabled: false,
      headerShown: false,
    },
  },
];
