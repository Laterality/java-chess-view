<template>
    <img :src='imgSrcMap.get(pieceType)' alt='' @click="handleClick">
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

import { BoardState } from '../model/BoardState';

@Component
export default class PieceObject extends Vue {
    @Prop() private pieceType!: BoardState;
    @Prop() private coordStr!: string;

    private imgSrcMap: Map<string, any>;

    public constructor() {
        super();
        this.imgSrcMap = new Map();
        this.imgSrcMap.set(BoardState.ROOK_BLACK, require('@/assets/piece/png/br.png'));
        this.imgSrcMap.set(BoardState.BISHOP_BLACK, require('@/assets/piece/png/bb.png'));
        this.imgSrcMap.set(BoardState.KING_BLACK, require('@/assets/piece/png/bk.png'));
        this.imgSrcMap.set(BoardState.KNIGHT_BLACK, require('@/assets/piece/png/bn.png'));
        this.imgSrcMap.set(BoardState.PAWN_BLACK, require('@/assets/piece/png/bp.png'));
        this.imgSrcMap.set(BoardState.QUEEN_BLACK, require('@/assets/piece/png/bq.png'));
        this.imgSrcMap.set(BoardState.ROOK_WHITE, require('@/assets/piece/png/wr.png'));
        this.imgSrcMap.set(BoardState.BISHOP_WHITE, require('@/assets/piece/png/wb.png'));
        this.imgSrcMap.set(BoardState.KING_WHITE, require('@/assets/piece/png/wk.png'));
        this.imgSrcMap.set(BoardState.KNIGHT_WHITE, require('@/assets/piece/png/wn.png'));
        this.imgSrcMap.set(BoardState.PAWN_WHITE, require('@/assets/piece/png/wp.png'));
        this.imgSrcMap.set(BoardState.QUEEN_WHITE, require('@/assets/piece/png/wq.png'));
        this.imgSrcMap.set(BoardState.MOVABLE, require('@/assets/piece/png/dot.png'));
    }

    private handleClick() {
        this.$emit('click', this.coordStr);
    }

}
</script>

