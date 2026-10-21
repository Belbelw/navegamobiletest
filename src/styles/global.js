import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const globalStyles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.background, padding: 22 },
  card: {
    backgroundColor: colors.surface, borderRadius: 18, padding: 22,
    borderWidth: 1, borderColor: colors.border, marginBottom: 16,
  },
  title: { fontSize: 25, fontWeight: '700', color: colors.text, marginBottom: 8 },
  subtitle: { fontSize: 15, lineHeight: 23, color: colors.muted },
  label: { color: colors.text, fontWeight: '600', marginBottom: 7, marginTop: 15 },
  input: {
    backgroundColor: colors.surface, borderColor: colors.border, borderWidth: 1,
    borderRadius: 11, paddingHorizontal: 14, paddingVertical: 13, fontSize: 16,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.primary, borderRadius: 11, paddingVertical: 14,
    alignItems: 'center', marginTop: 18,
  },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
  secondaryButton: {
    backgroundColor: colors.pale, borderRadius: 11, paddingVertical: 14,
    alignItems: 'center', marginTop: 10,
  },
  secondaryButtonText: { color: colors.primary, fontSize: 15, fontWeight: '700' },
  smallText: { fontSize: 13, lineHeight: 20, color: colors.muted },
});
