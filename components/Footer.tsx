import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, PixelRatio, Platform } from 'react-native';

const { width } = Dimensions.get('window');
const scale = PixelRatio.getFontScale();

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Image
        source={require('../assets/images/settings_icon.png')}
        style={styles.footerIcon}
        accessibilityLabel="Settings icon"
      />
      <Image
        source={require('../assets/images/globo.png')}
        style={styles.footerIcon}
        accessibilityLabel="Globe icon"
      />
      <Text style={styles.versionText} accessible accessibilityLabel="Beta version 0.0.1">
        Beta Version 0.0.1
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: width * 0.03,
    paddingHorizontal: width * 0.05,
    backgroundColor: '#1a1a1a',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: Platform.OS === 'ios' ? 20 : 10,
  },
  footerIcon: {
    width: width * 0.08,
    height: width * 0.08,
    maxWidth: 40,
    maxHeight: 40,
  },
  versionText: {
    color: '#fff',
    fontSize: 12 * scale,
  },
});