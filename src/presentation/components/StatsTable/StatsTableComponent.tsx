import { statAdapter } from '@/application/adapters/Stats/statAdapter'
import { IAdaptedStat } from '@/application/adapters/Stats/statAdapter.types'
import { formatStatNameUtil } from '@/application/utils/formatUtils'
import { useColor } from '@/presentation/hooks/useColor/useColorHook'
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material'
import { StyledStatBar } from './StatsTableComponent.styles'
import { IStatsTableProps } from './StatsTableComponent.types'

export const StatsTableComponent: React.FC<IStatsTableProps> = ({
  statsList,
}) => {
  const { getStatColor } = useColor()

  const adaptedStats: IAdaptedStat[] = statsList.map(stat => statAdapter(stat))

  return (
    <Box>
      <Typography fontSize={24} fontWeight='bold'>
        Stats
      </Typography>
      <Table>
        <TableBody>
          {adaptedStats.map(({ name, value }) => (
            <TableRow key={name}>
              <TableCell>{formatStatNameUtil(name)}</TableCell>
              <TableCell> {value}</TableCell>
              <TableCell>
                <Box
                  style={{
                    display: 'flex',
                    gap: 8,
                  }}
                >
                  <StyledStatBar value={value} color={getStatColor(value)} />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  )
}
