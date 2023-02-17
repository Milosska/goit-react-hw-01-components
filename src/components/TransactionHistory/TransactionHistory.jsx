import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  HeadTableData,
  TableRow,
  TableData,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <HeadTableData>Type</HeadTableData>
          <HeadTableData>Amount</HeadTableData>
          <HeadTableData>Currency</HeadTableData>
        </tr>
      </TableHead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <TableRow key={id}>
              <TableData>{type}</TableData>
              <TableData>{amount}</TableData>
              <TableData>{currency}</TableData>
            </TableRow>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
