import Landing from './pages/landing';
import DeedOfGift from './pages/services/deedOfGift';
import RegisterAndliquidation from './pages/services/registerAndLiquidation';
import Claim from './pages/services/claim';
import Ndfl from './pages/services/ndfl';
import Court from './pages/services/court';
import BuySales from './pages/services/buysales';

const routes = [
  {
    path: '/',
    exact: true,
    component: Landing,
  },
  {
    path: '/newcontract',
    exact: true,
    component: DeedOfGift,
  },
  {
    path: '/registerandliquidation',
    exact: true,
    component: RegisterAndliquidation,
  },
  {
    path: '/claim',
    exact: true,
    component: Claim,
  },
  {
    path: '/3ndfl',
    exact: true,
    component: Ndfl,
  },
  {
    path: '/representation',
    exact: true,
    component: Court,
  },
  {
    path: '/buysales',
    exact: true,
    component: BuySales,
  },
]

export default routes;
