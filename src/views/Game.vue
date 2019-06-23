<template>
  <div>
    <h1>{{ sessionTitle }}</h1>
    <GameBoard :states="states" :currentMovable="currentMovable" :disabled="!playable" @select="handleSelect" @move="handleMove"/>
    <p>{{ resultText }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Request from "@/model/Request";
import { AxiosResponse } from "axios";

import GameBoard from "@/components/GameBoard.vue";

import { BoardState, valueOf } from "@/model/BoardState";
import BoardStateDto from "@/model/BoardStateDto";
import { CoordX, CoordY, getXFrom, getYFrom } from "@/model/BoardCoordinate";

@Component({
  components: {
    GameBoard
  }
})
export default class Game extends Vue {
  private states: BoardState[][] = [];
  private currentMovable: BoardState[][] = [];
  private playable = true;
  private sessionTitle = '';
  private resultText = '';

  private selectedCoord = '';

  private beforeMount() {
    const sessionId = this.$route.params.sessionId;
    Request.getGame(sessionId).then((res: AxiosResponse) => {
      this.setBoardState(
        res.data.states.map((obj: any) => BoardStateDto.fromJson(obj))
      );
      this.sessionTitle = res.data.session.value.title;
      this.handleGameState(res.data.session.value.state);
    });
  }

  private setBoardState(pieces: BoardStateDto[]) {
    this.states.splice(0, this.states.length);
    for (let i = 0; i < 8; i++) {
      const row = [];
      for (let j = 0; j < 8; j++) {
        row.push(BoardState.NONE);
      }
      this.states.push(row);
    }
    pieces.forEach(piece => {
      this.states[getYFrom(piece.coordY)][getXFrom(piece.coordX)] = valueOf(
        piece.type
      );
    });
  }

  private handleSelect(coord: string) {
    Request.getMovable(this.$route.params.sessionId, coord).then(
      (res: AxiosResponse) => {
        this.selectedCoord = coord;
        this.setMovableCoordinates(res.data.movableCoordinates);
      }
    );
  }

  private setMovableCoordinates(coords: any) {
    this.clearMovable();
    coords.forEach((coord: any) => {
      this.currentMovable[getYFrom(coord.y)][getXFrom(coord.x)] = BoardState.MOVABLE;
    });
  }

  private clearMovable() {
    this.currentMovable.splice(0, this.states.length);
    for (let i = 0; i < 8; i++) {
      const row = [];
      for (let j = 0; j < 8; j++) {
        row.push(BoardState.NONE);
      }
      this.currentMovable.push(row);
    }
  }

  private handleMove(coord: string) {
    Request.movePiece(this.$route.params.sessionId, this.selectedCoord, coord)
    .then((res: AxiosResponse) => {
      this.clearMovable();
      this.setBoardState(res.data.state.board.map((obj: any) => BoardStateDto.fromJson(obj)));
      this.handleGameState(res.data.state.result);
    });
  }

  private handleGameState(result: string) {
    if (result === 'KEEEP') {
      this.playable = true;
      return;
    }
    if (result === 'BLACK_WIN') {
      this.playable = false;
      this.resultText = '흑 승리!';
    }
    if (result === 'WHITE_WIN') {
      this.playable = false;
      this.resultText = '백 승리!';
    }
  }
}
</script>

