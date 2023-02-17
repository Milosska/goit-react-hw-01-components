import styled from '@emotion/styled';

export const Table = styled.table`
  width: 50%;
  margin: 20px auto;
  text-align: center;
`;

export const TableHead = styled.thead`
  text-transform: uppercase;
  background-color: var(--aqua);
  color: white;
`;

export const HeadTableData = styled.th`
  padding: 10px 0;
  outline: 1px solid var(--bg-grey);
`;

export const TableRow = styled.tr`
  &:nth-of-type(2n) {
    background-color: #b7e1eb;
  }
`;

export const TableData = styled.td`
  padding: 10px 0;
  outline: 1px solid var(--bg-grey);
`;
