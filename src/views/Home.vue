<template>
  <div>
    <h1>체스 게임</h1>
    <h2>방 목록</h2>
    <ul>
      <template v-for="item in sessions">
        <SessionListItem :item="item" :key="item.id" />
      </template>
    </ul>

    <b-form @submit="handleSessCreate" v-on:submit.prevent>
      <b-form-group
        label="방 제목"
        label-for="input-session-name">
        <b-form-input
          id="input-session-name"
          v-model="sessTitle"
          type="text"
          required
          placeholder="방 제목을 입력하세요"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">생성</b-button>
    </b-form>
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

<style lang="scss" scoped>
h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 2.0rem;
}
</style>
