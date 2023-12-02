import { Router } from '../../../routerlib';

export type Section = (routeTo: Router) => ((() => void) | void);
