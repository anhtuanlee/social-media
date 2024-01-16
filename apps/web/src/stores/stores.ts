'use client';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { store } from '@/types/store';

import { createAuthSlice } from './slice/authSlice';
import { createPostSlice } from './slice/postSlice';

export const useStore = create<store.TAuth & store.TPost>()(
  devtools((...a) => ({
    ...createAuthSlice(...a),
    ...createPostSlice(...a),
  }))
);
