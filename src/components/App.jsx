import user from '../data/user';
import data from '../data/data';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics stats={data} />
    </div>
  );
};
