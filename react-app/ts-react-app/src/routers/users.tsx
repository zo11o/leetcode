import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import User from '../pages/users';
// const BrowseUsersPage = () => <BrowseUserTable />
// const UserProfilePage = props => <UserProfile userId={props.match.params.userId} />

const UserSubLayout = () => (
    <div className="user-sub-layout">
        <aside>
            {/* <UserNav /> */} 用户导航
      </aside>
        <div className="primary-content">
            <Switch>
                <Route path="/users" exact={true} component={User} />
                {/* <Route path="/users/:userId" component={UserProfilePage} /> */}
            </Switch>
        </div>
    </div>
)

export default UserSubLayout
