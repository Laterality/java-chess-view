export enum BoardState {
    PAWN_BLACK = 'PAWN_BLACK',
    ROOK_BLACK = 'ROOK_BLACK',
    KNIGHT_BLACK = 'KNIGHT_BLACK',
    BISHOP_BLACK = 'BISHOP_BLACK',
    QUEEN_BLACK = 'QUEEN_BLACK',
    KING_BLACK = 'KING_BLACK',
    PAWN_WHITE = 'PAWN_WHITE',
    ROOK_WHITE = 'ROOK_WHITE',
    KNIGHT_WHITE = 'KNIGHT_WHITE',
    BISHOP_WHITE = 'BISHOP_WHITE',
    QUEEN_WHITE = 'QUEEN_WHITE',
    KING_WHITE = 'KING_WHITE',
    NONE = 'NONE',
    MOVABLE = 'MOVABLE',
}

export function valueOf(name: string) {
    if (name === 'PAWN_BLACK') { return BoardState.PAWN_BLACK; }
    if (name === 'ROOK_BLACK') { return BoardState.ROOK_BLACK; }
    if (name === 'KNIGHT_BLACK') { return BoardState.KNIGHT_BLACK; }
    if (name === 'BISHOP_BLACK') { return BoardState.BISHOP_BLACK; }
    if (name === 'QUEEN_BLACK') { return BoardState.QUEEN_BLACK; }
    if (name === 'KING_BLACK') { return BoardState.KING_BLACK; }
    if (name === 'PAWN_WHITE') { return BoardState.PAWN_WHITE; }
    if (name === 'ROOK_WHITE') { return BoardState.ROOK_WHITE; }
    if (name === 'KNIGHT_WHITE') { return BoardState.KNIGHT_WHITE; }
    if (name === 'BISHOP_WHITE') { return BoardState.BISHOP_WHITE; }
    if (name === 'QUEEN_WHITE') { return BoardState.QUEEN_WHITE; }
    if (name === 'KING_WHITE') { return BoardState.KING_WHITE; }
    if (name === 'MOVABLE') { return BoardState.MOVABLE; }
    throw new Error('Invalid Piece type: ' + name);
}