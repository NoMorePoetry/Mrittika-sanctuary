
import React from 'react';
import { UserState } from './types';
import { INITIAL_CRYSTALS } from './constants';

export type { UserState } from './types';
export { INITIAL_CRYSTALS };

const defaultState: UserState = {
  name: '',
  archetype: null,
  isPremium: true,
  theme: 'dark',
  history: { moods: [] },
  inventory: INITIAL_CRYSTALS
};

export { defaultState as defaultUserState };

interface UserContextType {
  user: UserState;
  updateUser: (updates: Partial<UserState>) => void;
  unlockCrystal: (id: string) => void;
  toggleSettings: () => void; // Added
}

export const UserContext = React.createContext<UserContextType>({
  user: defaultState,
  updateUser: () => {},
  unlockCrystal: () => {},
  toggleSettings: () => {}
});
