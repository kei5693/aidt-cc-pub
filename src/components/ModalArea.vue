<template>
  <div class="modal-wrap">
    <div class="modal-box">
      <div class="modal-header">
        <slot name="header" />
        <button type="button" @click="$emit('modalClose')" class="gridFileDelIcon">
          <span class="blind">팝업닫기</span>
        </button>
      </div>
      <div class="modal-body">
        <slot name="body" />
      </div>
    </div>
    <div class="modal-overlay" @click="$emit('modalClose')"></div>
  </div>
</template>

<script>
export default {
  name: 'modalArea',
  props: {
  },
  data() {
    return {
    }
  }
}
</script>
