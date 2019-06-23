<template>
  <div>
    <div class="board-container">
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
          </tr>
          <tr>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
          </tr>
          <tr>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
          </tr>
          <tr>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
          </tr>
          <tr>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
          </tr>
          <tr>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
          </tr>
          <tr>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
          </tr>
          <tr>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
            <td>
              <img src alt>
            </td>
          </tr>
        </tbody>
      </table>
      <template v-for="(yItem, yIndex) in states">
        <template v-for="(xItem, xIndex) in yItem">
          <PieceObject
            v-if="xItem !== excludeRender"
            :pieceType="xItem"
            :class="['piece', getXClassName(xIndex), getYClassName(yIndex)]"
            :key="getKey(xIndex, yIndex) + 'p'"
            :coordStr="getKey(xIndex, yIndex)"
            @click="handleSelect"
          />
        </template>
      </template>
      <template v-for="(yItem, yIndex) in currentMovable">
        <template v-for="(xItem, xIndex) in yItem">
          <PieceObject
            v-if="xItem === movable"
            :pieceType="xItem"
            :class="['movable', getXClassName(xIndex), getYClassName(yIndex)]"
            :key="getKey(xIndex, yIndex) + 'm'"
            :coordStr="getKey(xIndex, yIndex)"
            @click="handleMove"
          />
        </template>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { BoardState } from "@/model/BoardState";

import PieceObject from "@/components/PieceObject.vue";

import { xIndexToString, yIndexToString } from "@/model/BoardCoordinate";

@Component({
  components: {
    PieceObject
  }
})
export default class GameBoard extends Vue {
  @Prop() private states!: BoardState[][];
  @Prop() private currentMovable!: BoardState[][];
  @Prop({default: false}) private disabled?: boolean;

  private excludeRender = BoardState.NONE;
  private movable = BoardState.MOVABLE;

  private mounted() {
    this.states.forEach((v, idx) => console.log(idx, v));
  }

  private getXClassName(index: number) {
    if (index === 0) {
      return "x-a";
    }
    if (index === 1) {
      return "x-b";
    }
    if (index === 2) {
      return "x-c";
    }
    if (index === 3) {
      return "x-d";
    }
    if (index === 4) {
      return "x-e";
    }
    if (index === 5) {
      return "x-f";
    }
    if (index === 6) {
      return "x-g";
    }
    if (index === 7) {
      return "x-h";
    }
    throw new Error("Invalid index for coordinate: " + index);
  }

  private getYClassName(index: number) {
    if (index === 0) {
      return "y-8";
    }
    if (index === 1) {
      return "y-7";
    }
    if (index === 2) {
      return "y-6";
    }
    if (index === 3) {
      return "y-5";
    }
    if (index === 4) {
      return "y-4";
    }
    if (index === 5) {
      return "y-3";
    }
    if (index === 6) {
      return "y-2";
    }
    if (index === 7) {
      return "y-1";
    }
    throw new Error("Invalid index for coordinate: " + index);
  }

  private getKey(xIdx: number, yIdx: number) {
    return xIndexToString(xIdx) + yIndexToString(yIdx);
  }

  private handleSelect(coord: string) {
    if (this.disabled) {
      return;
    }
    this.$emit("select", coord);
  }

  private handleMove(coord: string) {
    if (this.disabled) {
      return;
    }
    this.$emit('move', coord);
  }
}
</script>

<style lang="scss" scoped>
.board-container {
  height: 256px;
  margin: 0 auto;
  max-width: 256px;
  max-height: 256px;
  position: relative;
  width: 256px;
}

.board-container table {
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;
}

.board-container tr img {
  display: inline-block;
  background: burlywood;
  height: 100%;
  width: 100%;
}

.board-container tr td:nth-child(2n) img {
  background: moccasin;
}

.board-container tr:nth-child(2n) img {
  background: moccasin;
}

.board-container tr:nth-child(2n) td:nth-child(2n) img {
  background: burlywood;
}

.piece {
  cursor: pointer;
  height: 12.5%;
  position: absolute;
  width: 12.5%;
}

.x-a {
  left: 0;
}

.x-b {
  left: 12.5%;
}

.x-c {
  left: 25%;
}

.x-d {
  left: 37.5%;
}

.x-e {
  left: 50%;
}

.x-f {
  left: 62.5%;
}

.x-g {
  left: 75%;
}

.x-h {
  left: 87.5%;
}

.y-1 {
  bottom: 0;
}

.y-2 {
  bottom: 12.5%;
}

.y-3 {
  bottom: 25%;
}

.y-4 {
  bottom: 37.5%;
}

.y-5 {
  bottom: 50%;
}

.y-6 {
  bottom: 62.5%;
}

.y-7 {
  bottom: 75%;
}

.y-8 {
  bottom: 87.5%;
}

.movable {
  cursor: pointer;
  height: 12.5%;
  position: absolute;
  width: 12.5%;
  z-index: 2;
}
</style>
