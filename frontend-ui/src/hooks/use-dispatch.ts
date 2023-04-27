import { Dispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../redux/store';

export const useAppDispatch = (): Dispatch<BaseAction> =>
  useDispatch<AppDispatch>();
