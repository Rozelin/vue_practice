import TestForm       from './components/userForm/TestForm.vue';
import UserForm       from './components/userForm/UserForm.vue';
import Home           from './components/Home.vue';
import ServerDetails  from './components/ServerDetails.vue';
import UserComponent  from './components/userComponent/UserComponent.vue';
import NewQuotes      from './components/newQuotes/NewQuotes.vue';
import Quotes         from './components/quoteComponent/New.vue';
import Filters        from './components/filters/Filters.vue';
import Animations     from './components/Animations.vue';
import UserDetails    from './components/UserComponent/UserDetails.vue';
import UserEdit       from './components/UserComponent/UserEdit.vue';


export const routes = [
  { path: '*', redirect: '/' },
  { path: '', component: Home },
  { path: '/user/user-form', component: UserForm },
  { path: '/user/test-form', component: TestForm },
  { path: '/server-details', component: ServerDetails },
  { path: '/user', component: UserComponent },
  { path: '/quotes', component: Quotes },
  { path: '/new-quotes', component: NewQuotes },
  { path: '/filters', component: Filters },
  { path: ' /animations', component: Animations, name: 'Animations' },
  { path: '/user/:id', component: UserDetails, name: 'Userdetails' },
  { path: '/user/:id/edit', component: UserEdit }
];
