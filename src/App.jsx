import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friends/FriendList'
import TransactionHistory from 'components/transactions/Transactions';
import user from './user.json';
import data from './data.json';
import friends from './friends.json'
import transactions from './transactions.json'

 const App = () => 
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data}/>
     <FriendList friends={friends} />
     <TransactionHistory items={transactions} />
    </>

export default App