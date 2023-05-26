import { StyleSheet, Text, View, Image } from 'react-native';
import ChatScreen from './src/screens/ChatScreen';
import Chats from './src/screens/Chats';
import Navigator from './src/Navigation';
import MainTabNavigation from './src/Navigation/MainTabNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    justifyContent: 'center',
  },
});
