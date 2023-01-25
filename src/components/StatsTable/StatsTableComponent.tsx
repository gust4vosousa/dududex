import { Box } from '@mui/material';
import { blue, green, orange, red, yellow } from '@mui/material/colors';
import { useCallback } from 'react';
import {
  StatBar,
  StatBarContainer,
  StatLabel,
  StatsTableContainer
} from './StatsTableComponent.styles';
import {
  EStatNames,
  EStatRanges,
  IStatsTableProps
} from './StatsTableComponent.types';

export const StatsTableComponent: React.FC<IStatsTableProps> = ({
  statsList
}) => {
  const getColor = useCallback((value: number) => {
    const range = () => {
      if (value < 50) {
        return EStatRanges.bad;
      } else if (value < 80) {
        return EStatRanges.regular;
      } else if (value < 110) {
        return EStatRanges.medium;
      } else if (value < 130) {
        return EStatRanges.good;
      }
      return EStatRanges.excellent;
    };

    const color = {
      [EStatRanges.bad]: red[700],
      [EStatRanges.regular]: orange[700],
      [EStatRanges.medium]: yellow[700],
      [EStatRanges.good]: green[700],
      [EStatRanges.excellent]: blue[700]
    };

    return color[range()];
  }, []);

  const formatStatName = (statName: EStatNames) => {
    const name = {
      [EStatNames.attack]: 'Attack',
      [EStatNames.defense]: 'Defense',
      [EStatNames.speed]: 'Speed',
      [EStatNames.hp]: 'Hp',
      [EStatNames.specialAttack]: 'Sp. Attack',
      [EStatNames.specialDefense]: 'Sp. Defense'
    };

    return name[statName];
  };

  return (
    <StatsTableContainer>
      <Box fontSize={32} textAlign='center'>
        Stats
      </Box>
      {statsList.map((stat, index) => (
        <StatBarContainer key={index}>
          <StatLabel type='name'>
            {formatStatName(stat.stat.name as EStatNames)}
          </StatLabel>
          <StatLabel type='value'>{stat.base_stat}</StatLabel>
          <StatBar value={stat.base_stat} color={getColor(stat.base_stat)} />
        </StatBarContainer>
      ))}
    </StatsTableContainer>
  );
};
