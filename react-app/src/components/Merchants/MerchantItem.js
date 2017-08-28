import React from 'react';
import {
  Route,
  Link,
} from 'react-router-dom';

import MerchantDetail from './MerchantDetail';

const MerchantItem = (
                        merchantItem,
                      ) => {
  return (
    <div>
      <li><Link to={`${merchantItem.match.url}/${merchantItem._id}`}>{ merchantItem.name }</Link></li>

      <Route path={`${merchantItem.match.url}/${merchantItem._id}`} render={()=><MerchantDetail merchantItem = {merchantItem}/>} />
    </div>
  );
};

export default MerchantItem;
