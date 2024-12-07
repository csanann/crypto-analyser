import React from 'react';
import { TouchableOpacity, TouchableHighlightProps, Text } from 'react-native';

interface ButtonProps extends TouchableHighlightProps {
  children: React.ReactNode;
  className?: string;
}

export function Button ({ children, className, ...props }: ButtonProps) {
  return (
    <TouchableOpacity className={`bg-primary p-2 rounded-md ${className}`}
    {...props}>
      <Text className="text-primary-foreground text-center font-semibold">
        {children}
      </Text>
    </TouchableOpacity>
  );
}