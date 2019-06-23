export enum CoordX
{
    A = 0,
    B = 1,
    C = 2,
    D = 3,
    E = 4,
    F = 5,
    G = 6,
    H = 7,
}

export enum CoordY
{
    RANK_1 = 7,
    RANK_2 = 6,
    RANK_3 = 5,
    RANK_4 = 4,
    RANK_5 = 3,
    RANK_6 = 2,
    RANK_7 = 1,
    RANK_8 = 0,
}

export function getXFrom(from: string)
{
    if (from === 'a') { return CoordX.A; }
    if (from === 'b') { return CoordX.B; }
    if (from === 'c') { return CoordX.C; }
    if (from === 'd') { return CoordX.D; }
    if (from === 'e') { return CoordX.E; }
    if (from === 'f') { return CoordX.F; }
    if (from === 'g') { return CoordX.G; }
    if (from === 'h') { return CoordX.H; }
    throw new Error('Invalid X coordinate: ' + from);
}

export function xIndexToString(index: number)
{
    if (index === 0) { return 'a'; }
    if (index === 1) { return 'b'; }
    if (index === 2) { return 'c'; }
    if (index === 3) { return 'd'; }
    if (index === 4) { return 'e'; }
    if (index === 5) { return 'f'; }
    if (index === 6) { return 'g'; }
    if (index === 7) { return 'h'; }
    throw new Error('Invalid X index: ' + index);
}

export function getYFrom(from: string)
{
    if (from === '1') { return CoordY.RANK_1; }
    if (from === '2') { return CoordY.RANK_2; }
    if (from === '3') { return CoordY.RANK_3; }
    if (from === '4') { return CoordY.RANK_4; }
    if (from === '5') { return CoordY.RANK_5; }
    if (from === '6') { return CoordY.RANK_6; }
    if (from === '7') { return CoordY.RANK_7; }
    if (from === '8') { return CoordY.RANK_8; }
    throw new Error('Invalid Y coordinate: ' + from);
}

export function yIndexToString(index: number)
{
    if (index === 0) { return '8'; }
    if (index === 1) { return '7'; }
    if (index === 2) { return '6'; }
    if (index === 3) { return '5'; }
    if (index === 4) { return '4'; }
    if (index === 5) { return '3'; }
    if (index === 6) { return '2'; }
    if (index === 7) { return '1'; }
    throw new Error('Invalid Y index: ' + index);
}
