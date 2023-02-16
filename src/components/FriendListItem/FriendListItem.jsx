import PropTypes from 'prop-types';
import { Friend, Status, Avatar, FriendName } from './FriendListItem.styled';

export const FriendListItem = ({
  friend: { avatar, name: username, isOnline },
}) => {
  return (
    <Friend>
      <Status status={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48"></Avatar>
      <FriendName>{username}</FriendName>
    </Friend>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
