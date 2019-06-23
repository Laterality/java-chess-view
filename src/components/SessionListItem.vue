<template>
  <li>
    <router-link :to="'/game/' + item.id">{{ item.title }}</router-link>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export interface ListItem {
  id: string;
  title: string;
}

@Component
export default class SessionListItem extends Vue {
  @Prop() private item!: () => ListItem;
}
</script>

