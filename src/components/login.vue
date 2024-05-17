<template>
  <div class="content_bg">
    <span>Ti-FlowChart</span>
    <span>" 工作流 使用可视化编辑器... "</span>
    <span class="button" @click="emitEvent">开始</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spanValue: 'Ti-FlowChart',
    };
  },
  created() {
    // setInterval(() => {
    //   this.spanValue = Math.random();
    // }, 1000);
  },
  methods: {
    emitEvent() {
      this.$emit('login-event', '传递的数据');
    }
  }
};
</script>

<style lang="scss" scoped>
.content_bg {
  letter-spacing: 1px;
  color: #d9d5ec;
  background-color: #080321;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: nowrap;

  span:first-child {
    font-size: 60px;
    font-weight: bold;
    background: linear-gradient(to right, #ff00ff, #00ffff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .button{
    margin-top: 30px;
    opacity: 0.5;
    &:hover{
      opacity: 1;
    }
  }
}
</style>