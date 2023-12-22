import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { drinksReducer } from './drinks/slice';
import { authReducer } from './auth/slice';
import { themeReducer } from './theme/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
};

const themePersistConfig = {
  key: 'theme',
  storage,
};

const rootReducer = {
  drinks: drinksReducer,
  auth: persistReducer(authPersistConfig, authReducer),
  theme: persistReducer(themePersistConfig, themeReducer),
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
