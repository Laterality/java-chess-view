<template>
  <div>
    <h1>체스 게임</h1>
    <h2>방 목록</h2>
    <ul>
      <template v-for="item in sessions">
        <SessionListItem :item="item" :key="item.id" />
      </template>
    </ul>

    <form>
      <label for="input-sess-title">방 제목</label>
      <input type="text" id="input-sess-title" v-model="sessTitle">
      <button type="button" @click="handleSessCreate">방 생성</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AxiosResponse } from 'axios';

import Request from '@/model/Request';

import SessionListItem, { ListItem } from '@/components/SessionListItem.vue';

@Component({
  components: {
    SessionListItem,
  },
})
export default class Home extends Vue {
  private sessions: ListItem[] = [];
  private sessTitle = '';

  private beforeMount() {
    Request.getSessionList()
    .then((res: AxiosResponse) => {
      res.data.sessions.map((item: any): ListItem => { return {
        id: item.id,
        title: item.title,
      }; }).forEach((item: any) => {
        this.sessions.push(item);
      });
    });
  }

  private handleSessCreate() {
    Request.createSession(this.sessTitle)
    .then((res: AxiosResponse) => {
      this.$router.push({
        name: 'game',
        params: {
          sessionId: res.data.session.id,
        },
      });
    });
  }
}
</script>
