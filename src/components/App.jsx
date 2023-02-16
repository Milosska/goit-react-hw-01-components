import user from '../data/user';
import data from '../data/data';
import friends from '../data/friends';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
