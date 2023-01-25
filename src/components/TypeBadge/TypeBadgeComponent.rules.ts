import { useCallback } from 'react';
import { EType } from '../../@types/TypeEntity.types';

export const useTypeBadgeComponentRules = () => {
  const getColor = useCallback((type: EType) => {
    const color = {
      [EType.bug]: '#A6B91A',
      [EType.dark]: '#705746',
      [EType.dragon]: '#6F35FC',
      [EType.electric]: '#F7D02C',
      [EType.fairy]: '#D685AD',
      [EType.fighting]: '#C22E28',
      [EType.fire]: '#EE8130',
      [EType.flying]: '#A98FF3',
      [EType.ghost]: '#735797',
      [EType.grass]: '#7AC74C',
      [EType.ground]: '#E2BF65',
      [EType.ice]: '#96D9D6',
      [EType.normal]: '#A8A77A',
      [EType.poison]: '#A33EA1',
      [EType.psychic]: '#F95587',
      [EType.rock]: '#B6A136',
      [EType.steel]: '#B7B7CE',
      [EType.water]: '#6390F0'
    };

    return color[type];
  }, []);

  return { getColor };
};
