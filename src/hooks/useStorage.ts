import MMKVStorage, { create } from 'react-native-mmkv-storage';

export const storage: MMKVStorage.API = new MMKVStorage.Loader().initialize();

export const useStorage = create(storage);
