import React from 'react';
import { EType } from '../../@types/TypeEntity.types';
import { useTypeBadgeComponentRules } from './TypeBadgeComponent.rules';
import { TypeBadge, TypeBadgeContainer } from './TypeBadgeComponent.styles';
import { ITypeBadgeProps } from './TypeBadgeComponent.types';

export const TypeBadgeComponent: React.FC<ITypeBadgeProps> = ({ types }) => {
  const { getColor } = useTypeBadgeComponentRules();

  return (
    <TypeBadgeContainer>
      {types.map(({ type }, index) => (
        <TypeBadge
          key={index}
          color={getColor(type.name as EType)}
          isFirst={index === 0 ? true : false}
          isMonoType={types.length <= 1}
        >
          {type.name.toUpperCase()}
        </TypeBadge>
      ))}
    </TypeBadgeContainer>
  );
};
