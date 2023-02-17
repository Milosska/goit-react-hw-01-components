import styled from '@emotion/styled';

export const Container = styled.section`
  width: 50%;
  margin: 0 auto 20px;
  border: 1px solid var(--grey);
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  border-bottom: 1px solid var(--grey);
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ListItem = styled.li`
  width: 100%;
  height: 100%;
  padding: 10px 0;
  text-align: center;
  font-size: 22px;
  background-color: ${randomBgColor};
`;

function randomBgColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Label = styled.span`
  display: block;
  padding-bottom: 5px;
  font-weight: bold;
`;

export const Percentage = styled.span`
  display: block;
`;
