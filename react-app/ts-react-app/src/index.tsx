import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

// import App from './routers';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PrimaryLayout from './routers'

// const UserSubLayout = () => (
//   <div className="user-sub-layout">
//     <aside>
//       {/* <UserNav /> */} 用户导航
//     </aside>
//     <div className="primary-content">
//       <Switch>
//         <Route path="/users" exact component={BrowseUsersPage} />
//         <Route path="/users/:userId" component={UserProfilePage} />
//       </Switch>
//     </div>
//   </div>
// )

// const BrowseUsersPage = () => <BrowseUserTable />
// const UserProfilePage = props => <UserProfile userId={props.match.params.userId} />

// const PrimaryLayout = () => (
//   <div className="primary-layout">
//     <header>
//       Our React Router 4 App
//     </header>
//     <main>
//       <Switch>
//       <Route path="/" exact component={HomePage} />
//           <Route path="/users" component={UserSubLayout} />
//           <Route path="/products" component={ProductSubLayout} />
//           <Redirect to="/" />
//       </Switch>
//     </main>
//   </div>
// )

const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)


ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
