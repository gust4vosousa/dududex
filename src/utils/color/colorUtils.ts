import { EType } from '../../@types/Entities.types';
import { colors } from '../../theme/colors';
import { EStatRanges } from './colorUtils.types';

export const getTypeColorUtil = (type: EType) => {
  const color = {
    [EType.bug]: colors.types.bug,
    [EType.dark]: colors.types.dark,
    [EType.dragon]: colors.types.dragon,
    [EType.electric]: colors.types.electric,
    [EType.fairy]: colors.types.fairy,
    [EType.fighting]: colors.types.fighting,
    [EType.fire]: colors.types.fire,
    [EType.flying]: colors.types.flying,
    [EType.ghost]: colors.types.ghost,
    [EType.grass]: colors.types.grass,
    [EType.ground]: colors.types.ground,
    [EType.ice]: colors.types.ice,
    [EType.normal]: colors.types.normal,
    [EType.poison]: colors.types.poison,
    [EType.psychic]: colors.types.psychic,
    [EType.rock]: colors.types.rock,
    [EType.steel]: colors.types.steel,
    [EType.water]: colors.types.water
  };

  return color[type];
};

export const getStatColorUtil = (baseStat: number) => {
  const range = (value: EStatRanges) => {
    if (value <= 20) {
      return EStatRanges.terrible;
    }

    if (value <= 50) {
      return EStatRanges.low;
    }

    if (value <= 80) {
      return EStatRanges.average;
    }

    if (value <= 110) {
      return EStatRanges.good;
    }

    if (value <= 140) {
      return EStatRanges.high;
    }

    if (value <= 170) {
      return EStatRanges.excellent;
    }

    return EStatRanges.legendary;
  };

  const color = {
    [EStatRanges.terrible]: colors.stats.terrible,
    [EStatRanges.low]: colors.stats.low,
    [EStatRanges.average]: colors.stats.average,
    [EStatRanges.good]: colors.stats.good,
    [EStatRanges.high]: colors.stats.high,
    [EStatRanges.excellent]: colors.stats.excellent,
    [EStatRanges.legendary]: colors.stats.legendary
  };

  return color[range(baseStat)];
};
