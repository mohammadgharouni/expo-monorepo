import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

export type RootStackParamList = {
  Details: { id: string };
  Profile: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export enum Routes {
  Profile = 'Profile',
  Details = 'Details',
}

const prefix = Linking.createURL('/');

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [prefix],
  config: {
    screens: {
      Profile: 'profile',
      Details: {
        path: 'details/:id',
        parse: {
          id: (id) => `user-selected-id-${id}`,
        },
        stringify: {
          id: (id) => id.replace(/^user-/, ''),
        },
      },
    },
  },
};
