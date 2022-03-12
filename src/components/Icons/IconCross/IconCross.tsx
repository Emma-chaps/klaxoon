import React from "react";
import type { FC } from "react";

export interface IconCrossProps {
  className?: string;
}

export const IconCross: FC<IconCrossProps> = ({ className = "" }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    id='cross'
    className={className}
    data-name='Cross'
    viewBox='0 0 30 30'
  >
    <path d='M18.3,15L29.2,4.1c0.9-0.9,0.9-2.4,0-3.3s-2.4-0.9-3.3,0L15,11.7L4.1,0.8c-0.9-0.9-2.4-0.9-3.3,0  c-0.9,0.9-0.9,2.4,0,3.3L11.7,15L0.8,25.9c-0.9,0.9-0.9,2.4,0,3.3c0.9,0.9,2.4,0.9,3.3,0L15,18.3l10.9,10.9c0.9,0.9,2.4,0.9,3.3,0  s0.9-2.4,0-3.3L18.3,15z' />
  </svg>
);
