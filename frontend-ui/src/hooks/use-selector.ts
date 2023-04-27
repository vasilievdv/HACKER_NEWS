import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { State } from '../../src/redux/root-reducer';

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
