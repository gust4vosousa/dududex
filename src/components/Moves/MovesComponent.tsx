import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { useMemo } from 'react'
import { IconComponent } from '../Icon/IconComponent'
import { EIcons } from '../Icon/IconComponent.types'
import { IMovesProps } from './MovesComponent.types'

export const MovesComponent: React.FC<IMovesProps> = ({ moves }) => {
  const gameVersions = useMemo<string[]>(
    () =>
      Array.from(
        new Set(
          moves.flatMap((move) =>
            move.version_group_details.map(
              (detail) => detail.version_group.name
            )
          )
        )
      ),
    [moves]
  )

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<IconComponent icon={EIcons.EXPAND_MORE} />}
      >
        <Typography>Moves</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Moves</TableCell>
              {gameVersions.map((version) => (
                <TableCell key={version}>{version}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {moves.map(({ move, version_group_details }) => (
              <TableRow key={move.name}>
                <TableCell>{move.name}</TableCell>
                <TableCell>
                  {version_group_details.map(
                    ({ level_learned_at, version_group }, i) => (
                      <div key={i}>
                        {version_group.name} (Level {level_learned_at})
                      </div>
                    )
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </AccordionDetails>
    </Accordion>
  )
}
