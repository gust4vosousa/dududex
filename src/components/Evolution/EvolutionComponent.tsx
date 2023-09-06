import { Box, Link, Typography } from '@mui/material'
import { firstLetterUpperCaseUtil } from '../../utils/formatUtils'
import { useEvolutionComponentRules } from './EvolutionComponent.rules'
import { IEvolutionProps } from './EvolutionComponent.types'

export const EvolutionComponent: React.FC<IEvolutionProps> = (props) => {
  const { evolutionLine, onSelectEvolution } = useEvolutionComponentRules(props)

  return (
    <Box>
      <Typography fontSize={24}>Evolutions</Typography>
      {evolutionLine.map(({ name, spriteUrl }) => (
        <Link
          key={name}
          onClick={() => onSelectEvolution(name)}
          style={{
            alignItems: 'center',
            cursor: 'pointer',
            display: 'flex',
            textDecoration: 'none',
          }}
        >
          <img alt={`${name} sprite`} src={spriteUrl} width='40px' />
          <Typography fontSize={18}>
            {`• ${firstLetterUpperCaseUtil(name)}`}
          </Typography>
        </Link>
      ))}
    </Box>
  )
}
