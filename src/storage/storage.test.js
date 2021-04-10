import { it, expect } from '@jest/globals';
import AsyncStorage from '@react-native-async-storage/async-storage';

it('mock-async-storage-test', async () => {
  await AsyncStorage.getItem('test-key');

  expect(AsyncStorage.getItem).toBeCalledWith('test-key');
});
