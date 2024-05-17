<template>
  <div class="content_bg">
    <div class="content_header">
      <span>
        <strong style="font-size: 20px;">Ti-FlowChart</strong>
        <a target="_blank" href="https://github.com/Timtance" aria-label="GitHub"><svg aria-hidden="true" role="img" class="" viewBox="0 0 16 16" width="16" height="16" fill="black" style="display:inline-block;user-select:none;vertical-align:top"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>&nbsp;Star 10,932</a>
        <a target="_blank" href="https://gitee.com/Timtance" aria-label="Gitee"><img height="16" src="https://gitee.com/static/images/logo.svg"/></a>
      </span>
      <span>" 工作流 使用可视化编辑器... "</span>
    </div>
    <div class="content_body">
      <div class="menu">

        <div class="ti-fBox-normal">
          <div>
            <div></div>
            <span>Question Classifier 2</span>
            <div></div>
          </div>
          <div>
            <div></div>
            <span>gpt-4</span>
          </div>
          <div>
            <span>CLASS1</span>
            <span>Repair & Service</span>
          </div>
          <div>
            <span>CLASS2</span>
            <span>Featured services</span>
          </div>
        </div>
      </div>
      <div class="flowMain"></div>
    </div>
    <div class="content_bottom">
      <span>@Tui-TANCE-Txh Tui-Ti</span>
    </div>
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
  }
};
</script>

<style lang="scss">
.content_bg{
  letter-spacing: 0.5px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #f4f5f7;
  display: inline-flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  font-size: 12px;
  .content_header, .content_bottom{
    padding: 5px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
  }
  .content_header>*{
    >*{
      margin: 0 10px;
      display: inline-flex;
    }
    &>a{
      text-decoration: none;
      line-height: 20px;
      opacity: 0.5;
      &:hover{
        opacity: 1;
      }
    }
  }
  .content_bottom{
    justify-content: center;
  }
  .content_body{
    flex: 1;
    background-color: #f1f2f7;
    margin: 5px 10px 0 10px;
    border-radius: 10px;
    border: solid 1px rgb(0 0 0 / 3%);
    display: inline-flex;
    flex-direction: row;
    overflow: hidden;
    .menu{
      background-color: #ffffff;
      width: 200px;
      padding: 10px 0;
      display: inline-flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
    }
  }
}
.ti-fBox-normal{
  color: #757575;
  background-color: #ffffff;
  width: 150px;
  padding: 5px;
  border-radius: 10px;
  font-size: 12px;
  box-shadow: 0px 0px 3px 0px rgb(88 88 88 / 20%);
  &>div{
    background: #f4f5f7;
    margin-top: 5px;
    border-radius: 5px;
    padding: 5px;
    text-align: left;
  }
}
</style>