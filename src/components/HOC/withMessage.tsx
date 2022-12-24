import React from 'react';
import { MESSAGE } from '../../constants/message';

interface WithMessageProps {
  message?: string;
}

export const withMessage =
  <P extends object>(
    Component: React.ComponentType<P>,
  ): React.FC<P & WithMessageProps> =>
  ({ ...props }: P & WithMessageProps) => {
    const newProps = { ...props, message: MESSAGE };
    return <Component {...(newProps as P)} />;
  };
