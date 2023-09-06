import { Box } from '@mui/material'
import { statAdapter } from '../../adapters/Stats/statAdapter'
import { IAdaptedStat } from '../../adapters/Stats/statAdapter.types'
import { useColor } from '../../hooks/useColor/useColorHook'
import { formatStatNameUtil } from '../../utils/formatUtils'
import {
  StatBar,
  StatBarContainer,
  StatLabel,
  StatsTableContainer,
} from './StatsTableComponent.styles'
import { IStatsTableProps } from './StatsTableComponent.types'

export const StatsTableComponent: React.FC<IStatsTableProps> = ({
  statsList,
}) => {
  const { getStatColor } = useColor()

  const adaptedStats: IAdaptedStat[] = statsList.map((stat) =>
    statAdapter(stat)
  )

  return (
    <StatsTableContainer>
      <Box fontSize={32} textAlign='center'>
        Stats
      </Box>
      {adaptedStats.map(({ name, value }) => (
        <StatBarContainer key={name}>
          <StatLabel type='name'>{formatStatNameUtil(name)}</StatLabel>
          <StatLabel type='value'>{value}</StatLabel>
          <StatBar value={value} color={getStatColor(value)} />
        </StatBarContainer>
      ))}
    </StatsTableContainer>
  )
}
