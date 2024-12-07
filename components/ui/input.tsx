import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  className?: string;
}
export function Input({ className = '', ...props }: InputProps) {
  return (
    <TextInput className={`bg-input text-foreground p-2 rounded-md ${className}`}
    {...props} />
  );
}