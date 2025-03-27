import React, {ReactNode} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useStyles} from './button';

export const Button = ({
  children,
  mode = 'primary',
  title,
}: {
  children?: ReactNode;
  mode?: 'primary' | 'simple';
  title?: string;
}) => {
  const styles = useStyles();
  return (
    <TouchableOpacity>
      {title && <Text style={styles.title}>{title}</Text>}
      {children}
    </TouchableOpacity>
  );
};
