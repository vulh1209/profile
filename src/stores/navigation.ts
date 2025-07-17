import { create } from 'zustand';
import type { NavigationState } from '../types';

export const useNavigationStore = create<NavigationState>((set) => ({
  isMenuOpen: false,
  activeSection: 'home',
  setMenuOpen: (open) => set({ isMenuOpen: open }),
  setActiveSection: (section) => set({ activeSection: section }),
}));