import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Product from '../pages/products';

const ProductSubLayout = () => (
    <div className="user-sub-layout">
        <aside>
            {/* <UserNav /> */} 产品导航
      </aside>
        <div className="primary-content">
            <Switch>
                <Route path="/products" exact={true} component={Product} />
                {/* <Route path="/products/:id" component={UserProfilePage} /> */}
            </Switch>
        </div>
    </div>
)

export default ProductSubLayout
