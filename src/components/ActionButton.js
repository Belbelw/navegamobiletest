import React from 'react';
import { Pressable, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ActionButton({ title, onPress, secondary = false }) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        secondary ? globalStyles.secondaryButton : globalStyles.button,
        pressed && { opacity: 0.78 },
      ]}
    >
      <Text style={secondary ? globalStyles.secondaryButtonText : globalStyles.buttonText}>
        {title}
      </Text>
    </Pressable>
  );
}
