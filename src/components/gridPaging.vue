<template>
  <div class="gridpaging">
    <button type="button" class="pagingFirst" title="처음">처음</button>
    <button type="button" class="pagingPrev" title="이전">이전</button>
    <ul class="pagingList">
      <li v-for="index in 10" :key="index">
        <button type="button" title="페이지이동" :class="{ active: index - 1 === activeItem }"
          @click="this.activeItem = index - 1">
          {{ index }}
        </button>
      </li>
    </ul>
    <button type="button" class="pagingNext" title="다음">다음</button>
    <button type="button" class="pagingLast" title="끝">끝</button>
  </div>
</template>

<script>
export default {
  name: 'gridPaging',
  data() {
    return {
      activeItem: 0,
    };
  },
}
</script>