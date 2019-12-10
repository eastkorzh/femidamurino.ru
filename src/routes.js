import Landing from './pages/landing';
import deedOfGift from './pages/services/deedOfGift';
import RegisterAndliquidation from './pages/services/registerAndLiquidation';

const routes = [
  {
    path: '/',
    exact: true,
    component: Landing,
  },
  {
    path: '/newcontract',
    exact: true,
    component: deedOfGift,
  },
  {
    path: '/registerandliquidation',
    exact: true,
    component: RegisterAndliquidation,
  },
]

export default routes;
