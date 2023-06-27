import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <View style={styles.container}>
      {!clicked && (
        <Pressable testID="click-me-button" style={styles.button} onPress={() => setClicked(true)}>
          <Text style={styles.text}>Hier klicken!</Text>
        </Pressable>
      )}
      {clicked && (
          <>
            <Image testID="check-icon" style={styles.image} source={require('./assets/check.png')} />
            <Text style={styles.hi}>Das funktioniert!</Text>
            <Pressable testID="reset-button" style={styles.button2} onPress={() => setClicked(false)}>
              <Text style={styles.text}>Reset</Text>
            </Pressable>
          </>
        )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hi: {
    fontSize: 30,
    color: '#4630EB',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: '#4630EB',
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 0,
    marginBottom: 30,
  },
  image: {
    width: 70,
    height: 70,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
