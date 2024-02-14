import userData from './Profile/userData.json';
import Profile  from "./Profile/Profile"

import friends from "../components/FriendList/friends.json";
import FriendList from "./FriendList/FriendList"

import transactions from "./TransactionHistory/transactionhistory.json"
import TransactionHistory from "./TransactionHistory/TransactionHistory";


 export const App = () => {
  
  return (
    <div>
 
     <Profile
      name={userData.name}
      tag={userData.tag}
      location={userData.location}
      avatar={userData.avatar}
      stats={userData.stats}
    />

       <FriendList friends={friends} /> 
       <TransactionHistory items={transactions} />

    </div>
  );
};




