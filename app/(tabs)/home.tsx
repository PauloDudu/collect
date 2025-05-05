import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  PixelRatio,
  Platform,
} from 'react-native';
import Header from '../../components/Header';
import Footer from '../../components//Footer';

const { width, height } = Dimensions.get('window');
const scale = PixelRatio.getFontScale();

export default function App() {
  const [isAR, setIsAR] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <Header isAR={isAR} onToggleAR={setIsAR} />
      <View style={styles.content}>
        <Text style={styles.title} accessible accessibilityLabel="Bonfire of the Souls title">
          Bonfire of the Souls
        </Text>
        <Image
          source={require('../../assets/images/bonfire_model.gif')}
          style={styles.modelImage}
          resizeMode="contain"
          accessibilityLabel="Bonfire model animation"
        />
        <TouchableOpacity
          style={styles.button}
          accessible
          accessibilityRole="button"
          accessibilityLabel="Change model"
        >
          <Text style={styles.buttonText}>Change</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width * 0.05,
  },
  title: {
    color: '#fff',
    fontSize: 16 * scale,
    fontWeight: '600',
    marginBottom: height * 0.02,
    textAlign: 'center',
  },
  modelImage: {
    width: Math.min(width * 0.9, 600),
    height: Math.min(height * 0.4, 400),
    marginBottom: height * 0.03,
  },
  button: {
    borderTopWidth: 2,
    borderTopColor: '#fff',
    paddingHorizontal: width * 0.1,
    paddingVertical: height * 0.015,
    alignItems: 'center',
    minWidth: width * 0.2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14 * scale,
    fontWeight: '500',
  },
});