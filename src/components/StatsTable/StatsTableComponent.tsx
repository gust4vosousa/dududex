import { Box } from '@mui/material';
import { getStatColorUtil } from '../../utils/color/colorUtils';
import { formatStatNameUtil } from '../../utils/formatUtils';
import {
  StatBar,
  StatBarContainer,
  StatLabel,
  StatsTableContainer
} from './StatsTableComponent.styles';
import { EStatNames, IStatsTableProps } from './StatsTableComponent.types';

export const StatsTableComponent: React.FC<IStatsTableProps> = ({
  statsList
}) => {
  return (
    <StatsTableContainer>
      <Box fontSize={32} textAlign='center'>
        Stats
      </Box>
      {statsList.map((stat, index) => (
        <StatBarContainer key={index}>
          <StatLabel type='name'>
            {formatStatNameUtil(stat.stat.name as EStatNames)}
          </StatLabel>
          <StatLabel type='value'>{stat.base_stat}</StatLabel>
          <StatBar
            value={stat.base_stat}
            color={getStatColorUtil(stat.base_stat)}
          />
        </StatBarContainer>
      ))}
    </StatsTableContainer>
  );
};
