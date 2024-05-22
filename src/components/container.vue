<template>
  <div class="content_bg">
    <div class="content_header">
      <span>
        <strong class="login_name">FlowChart</strong>
        <a target="_blank" href="https://github.com/Timtance" aria-label="GitHub"><svg aria-hidden="true" role="img" class="" viewBox="0 0 16 16" width="16" height="16" fill="black" style="display:inline-block;user-select:none;vertical-align:top"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>&nbsp;Star 10,932</a>
        <a target="_blank" href="https://gitee.com/Timtance" aria-label="Gitee"><img height="16" src="https://gitee.com/static/images/logo.svg"/></a>
      </span>
      <span>
        <div @click="tuiFlowChartOutput" title="数据导出">
          ⎗ &nbsp;Export
        </div>
        <div class="content_header_select">
          Studio <span class="spit">/</span>
          <select @change="onChangeFrame">
            <option value="" selected>自由操作</option>
            <option value="system">系统工作流工程</option>
          </select>
        </div>
        <div @click="tuiFlowChartInput" title="数据导入">
          ⎘ &nbsp;Import
        </div>
      </span>
      <span>
        <span>" 工作流 使用可视化编辑器... "</span>
      </span>
    </div>
    <div class="content_body">
      <div class="menu">
        <ul class="ti_fBox_list">
          <li>
            <div class="ti_fBox_normal" id="A1">
              <div>
                <div class="ti_fBox_icon">Q</div>
                <span data-key="value">Question Class2</span>
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
          </li>
        </ul>
      </div>
      <div class="flow_main">
        <div class="flow_tools">
          <span style="display: inline-flex; flex-direction: column;">
            <span>{{ flowProjectName }}</span>
            <span>tools</span>
          </span>
          <span>
            <button class="btn" @click="tuiFlowChartZoomIn">放大</button>
            <button class="btn" @click="tuiFlowChartZoomOut">缩小</button>
            <button class="btn btn-primary" @click="tuiFlowChartClear">清空</button>
          </span>
        </div>
        <div id="mapFlow" @click="onEvent" @created="onEvent" @selected="onEvent" @change="onEvent" class="flow_container">编辑区</div>
        
        <el-drawer v-model="visible" :show-close="false">
          <template #header="{ close, titleId, titleClass }">
            <h4 :id="titleId" :class="titleClass">Dom Data Edit</h4>
            <!-- <el-button type="success" @click="domSave(close)">
              Save
            </el-button>
            
            <el-button type="danger" @click="close" :icon="CircleCloseFilled" circle /> -->
            
            <el-button type="success" @click="domSave(close)" :icon="Check" circle />
            <el-button type="info" @click="close" :icon="Close" circle />
          </template>
          <el-form
            :label-position="labelPosition"
            label-width="auto"
            :model="formLabelAlign"
            style="max-width: 600px"
          >
            <el-form-item v-for="(value, key) in formLabelAlign" :key="key" :label="key" :style="{display: key.toString() === 'sourceId' || key.toString() === 'id'?'none':''}">
              <span v-if="key.toString() === 'sourceId' || key.toString() === 'id'" style="opacity: 0.5;">{{ value }}</span>
              <el-input v-else v-model="formLabelAlign[key]" />
            </el-form-item>
            <div class="el-form-item_add">
              <el-form-item label="添加属性">
                <el-input v-model="formLabelAddValue" />
                <el-button :disabled="!formLabelAddValue || formLabelAlign[formLabelAddValue]" @click="domAdd" type="primary" :icon="Plus" circle />
              </el-form-item>
            </div>
          </el-form>
        </el-drawer>

        <img v-if="screenshot" class="screenshot" :src="screenshot" alt="截图">

      </div>
    </div>
    <div class="content_bottom">
      <span>@Tui-TANCE-Txh Tui-Ti</span>
    </div>
    <div class="content_bottom_mask"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref} from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { FormProps, ElButton, ElDrawer } from 'element-plus'
import { Check, Close, Plus } from '@element-plus/icons-vue'
// import 'ti-flowchart/lib/ti-flowchart.umd.js';
import './mapFlow.js';
import html2canvas from 'html2canvas';
import { systemJsonData } from '../mock';
import { copyToClipboard } from '../utils';

const formLabelAddValue = ref<string>('')
const formLabelAlign = reactive<any>({})
const labelPosition = ref<FormProps['labelPosition']>('right')
const visible = ref(false)
const tuiFlowChartRef = ref<any>(null)
const screenshot = ref<any>(null)
const flowProjectName = ref('自由操作')

const tuiFlowChartInput = () => {
  ElMessageBox.prompt("数据导入", "数据格式：JSON", {
    confirmButtonText: '好的',
    cancelButtonText: '取消',
  }).then(({value}) => {
    let data = null;
    if(value){
      data = JSON.parse(value);
    }
    tuiFlowChartRef.value.load(data);
  })
}
const tuiFlowChartOutput = () => {
  const data = tuiFlowChartRef.value.getData();
  console.log("tuiFlowChartOutput:" + data.length);
  const dataJson = JSON.stringify(data);
  ElMessage.success('已复制剪贴板, 可Ctrl + v');
  copyToClipboard(dataJson);
}
const tuiFlowChartZoomIn = () => {
  tuiFlowChartRef.value.zoomIn();
}
const tuiFlowChartZoomOut = () => {
  tuiFlowChartRef.value.zoomOut();
}
const tuiFlowChartClear = () => {
  visible.value = false;
  tuiFlowChartRef.value.clear();
}
const onEvent = (e:any) => {
  console.log('eventName:'+e.type, JSON.stringify(e.data));
  if(e.type === 'selected'){
    visible.value = true;
    const keysNew = Object.keys(e.data);
    const keysOld = Object.keys(formLabelAlign);
    const keysDel = keysOld.filter(value => !keysNew.includes(value));
    keysDel.forEach(key => delete formLabelAlign[key]);
    for(let v in e.data){
      formLabelAlign[v] = e.data[v];
    }
  }
  capture();
}
const domSave = (fun:any) => {
  typeof fun === 'function' && fun();
  let data:any = JSON.stringify(formLabelAlign);
  data = JSON.parse(data)
  tuiFlowChartRef.value.load([data]);
}
const domAdd = () => {
  formLabelAlign[formLabelAddValue.value] = '';
}
const capture = () => {
  const element:any = document.getElementById('mapFlow');
  html2canvas(element.firstElementChild).then(canvas => {
    screenshot.value = canvas.toDataURL();
  });
}
const onChangeFrame = (e:any) => {
  let option = e.target.selectedOptions[0];
  flowProjectName.value = option['innerText'];
  tuiFlowChartClear();
  if(option['value'] === 'system') {
    tuiFlowChartRef.value.load(systemJsonData);
  }
}
onMounted(() => {
  var w:any = window
  var t = new w.tuiFlowChart()
  var dragItemA:any = document.getElementById("A1")
  t.addDragItem(dragItemA)

  var dragBox:any = document.getElementById("mapFlow")
  t.setDragBox(dragBox)

  tuiFlowChartRef.value = t
})
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
  // display: inline-flex;
  // flex-direction: column;
  // flex-wrap: nowrap;
  // justify-content: space-between;
  font-size: 12px;
  .content_header, .content_bottom{
    width: calc(100% - 10px);
    height: 30px;
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
    &>.login_name{
      font-size: 20px;
      &:before {
        content: "Ti-";
        color: red;
        // margin-right: -13px;
        z-index: 1;
      }
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
  .content_header>span{
    cursor: pointer;
  }
  .content_bottom{
    justify-content: right;
  }
  .content_bottom_mask{
    background: linear-gradient(to bottom, #ffffff00, #dcdada);
    height: 30px;
    width: 100%;
    position: absolute;
    bottom: 0px;
  }
  .content_body{

    // flex: 1;
    background-color: #f1f2f7;
    margin: 5px 10px 0 10px;
    border-radius: 10px;
    border: solid 1px rgb(0 0 0 / 3%);
    // display: inline-flex;
    // flex-direction: row;
    overflow: hidden;
    height: calc(100% - 80px - 7px);
    width: calc(100% - 20px);
    display: flex;
    .menu{
      background-color: #ffffff;
      width: 60px;
      padding: 10px 0;
      display: inline-flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
    }
    .flow_main{
      position: relative;
      height: 100%;
      width: calc(100% - 60px - 10px);
      // flex: 1;
      // display: flex;
      // flex-direction: column;
      text-align: left;
      padding: 5px;
      .flow_tools {
        height: 45px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .flow_container {
        height: calc(100% - 45px - 10px);
        width: calc(100% - 10px);
        border-radius: 5px;
        border: solid 1px var(--grid-bg-color);
        overflow: hidden;
        &>.tui-flow-chart-box-body{
          background-image: linear-gradient(
              0deg,
              var(--grid-bg-color) 0px,
              var(--grid-bg-color) 1px,
              transparent 1px,
              transparent 100px
            ),
            linear-gradient(
              90deg,
              var(--grid-bg-color) 0px,
              var(--grid-bg-color) 1px,
              transparent 1px,
              transparent 100px
            );
          background-size: 10px 10px;
        }
      }
    }
  }
}
.ti_fBox_list{
  list-style: none;
  padding: 0;
 &>li{
    zoom: 0.2;
    border: solid 1px #cccccc;
    border-radius: 15px;
    user-select: none;
    box-shadow: 7px 9px 15px 0px #b9c6cf;
    cursor: pointer;
  }
}
.ti_fBox_normal{
  color: #757575;
  background-color: #ffffff;
  width: 150px;
  padding: 5px;
  border-radius: 10px;
  font-size: 12px;
  box-shadow: 0px 0px 3px 0px rgb(88 88 88 / 20%);
  &>div:first-child{
    display: flex;
    align-items: center;
    font-weight: bold;
    background-color: transparent;
  }
  &>div{
    background: #f4f5f7;
    margin-top: 5px;
    border-radius: 5px;
    padding: 5px;
    text-align: left;
  }
  .ti_fBox_icon{
    margin-right: 5px; 
  }
}

.el-overlay{
  position: absolute !important;
  background-color: transparent !important;
  pointer-events: none !important;
  top: 50px !important;
  height: calc(100% - 45px - 10px - 5px) !important;
  overflow: hidden !important;
  &>div{
    pointer-events: visible !important;
  }
  .el-drawer__header{
    margin-bottom: 0 !important;
    padding: 10px !important;
  }
  .el-drawer__body{
    padding: 0px 10px !important;
    .el-form-item__content{
      line-height: 20px !important;
    }
    .el-form-item_add{
      position: sticky;
      bottom: 0px;
      background-color: #ffffff;
      height: 60px;
      width: 100%;
      display: inline-flex;
      align-items: center;
      border-top: dashed 1px #ececec;
      padding-top: 10px;
      overflow: hidden;
      .el-input{
        flex: 1;
        margin-right: 10px;
      }
    }
  }
}
.screenshot{
  position: absolute;
  bottom: 0;
  height: 100px;
}
.content_header_select{
  color: rgb(102, 102, 240);
  box-shadow: rgb(185, 198, 207) 1px 1px 4px 0px;
  padding: 4px 10px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  .spit{
    color: rgb(204, 204, 204);
    margin: 0px 10px;
  }
  select {
    color: rgb(102, 102, 240);
    border: none;
    background: none;
  }
  select:focus-visible {
    border-color: red !important;
    outline-offset: 7px;
    outline: none;
  }
}
</style>