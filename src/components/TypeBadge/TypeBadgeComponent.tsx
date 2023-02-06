import React from 'react';
import { getTypeColorUtil } from '../../utils/color/colorUtils';
import { TypeBadge, TypeBadgeContainer } from './TypeBadgeComponent.styles';
import { ITypeBadgeProps } from './TypeBadgeComponent.types';

export const TypeBadgeComponent: React.FC<ITypeBadgeProps> = ({ types }) => {
  return (
    <TypeBadgeContainer>
      {types.map((type, index) => (
        <TypeBadge
          key={index}
          color={getTypeColorUtil(type)}
          isFirst={index === 0 ? true : false}
          isMonoType={types.length <= 1}
        >
          {type.toUpperCase()}
        </TypeBadge>
      ))}
    </TypeBadgeContainer>
  );
};
