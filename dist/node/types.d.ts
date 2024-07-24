import type { Position } from '../types';
export type PathfindingNodeConfig = {
    position: Position;
    distance: number;
    weight?: number;
};
