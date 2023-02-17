import PropTypes from 'prop-types';
import {
  Container,
  Title,
  List,
  ListItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  const StatElems = ({ data }) => {
    return data.map(({ label, percentage, id }) => {
      return (
        <ListItem key={id}>
          <Label>{label}</Label>
          <Percentage>{percentage}</Percentage>
        </ListItem>
      );
    });
  };

  return (
    <Container>
      {title && <Title>{title}</Title>}
      <List>
        <StatElems data={stats} />
      </List>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
