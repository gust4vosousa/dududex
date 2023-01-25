import { EStatNames } from '../components/StatsTable/StatsTableComponent.types';

export const firstLetterUpperCaseUtil = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

export const formatStatNameUtil = (statName: EStatNames) => {
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
