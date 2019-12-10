import Landing from './pages/landing';
import deedOfGift from './pages/services/deedOfGift';

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
]

export default routes;
