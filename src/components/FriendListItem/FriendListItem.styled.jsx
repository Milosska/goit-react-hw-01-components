import styled from '@emotion/styled';

export const Friend = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
  padding: 10px;
  border: 1px solid var(--bg-grey);

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:hover,
  &:focus {
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;

export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;

  ${({ status }) => {
    if (status === true) {
      return 'background-color: green;';
    } else if (status === false) {
      return 'background-color: red;';
    } else {
      return 'background-color: var(--bg-grey);';
    }
  }}
`;

export const Avatar = styled.img`
  border-radius: 5px;
`;

export const FriendName = styled.p`
  font-size: 26px;
  font-weight: bold;
`;
