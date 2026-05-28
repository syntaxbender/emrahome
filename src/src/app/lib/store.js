import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from '@/app/components/nav/navSlice';
import preloaderReducer from '@/app/components/preloader/preloaderSlice';
import customLinkReducer from '@/app/components/customLink/customLinkSlice';


export const makeStore = () => {
  return configureStore({
    reducer: {
      navigation: navigationReducer,

      preloader: preloaderReducer,
      customLink: customLinkReducer,

      //subscribe: subscribeReducer,
    },
  });
};

// AppStore, RootState ve AppDispatch tip bilgileri JavaScript'te kullanılmadığı için kaldırılmıştır.
