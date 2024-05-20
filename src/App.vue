<template>
  <div class="appTui">
    <login v-if="isSwitch" @login-event="onLoginEvent"></login>
    <container v-else></container>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref} from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus'
import login from './components/login.vue';
import container from './components/container.vue';

const templateSpan = ref('Test'); 
const isSwitch = ref(true)
const tuiFlowChartRef = ref()
const modeData = reactive<any>({
  formInline: {}
})
const tableData = ref<any>([
  { option: '》', code: 'Tui-Ti-TANCE-TXH', likeStatus: '2', status: '1' }
])

const mapFlowDefault = () => {
  // nextTick( () => {
    // var targetItem:any = document.getElementById("23423");
    // targetItem.draggable = "true";
    // // targetItem.addEventListener("dragstart", drag);
    // targetItem.ondragstart = drag;
    // var targetBox = document.getElementById("mapFlow");
  // })
  
  setTimeout(() => {
    var w:any = window
    var t = new w.tuiFlowChart();
    var dragItemA:any = document.getElementById("A1");
    t.addDragItem(dragItemA);
    var dragItemB:any = document.getElementById("B1");
    t.addDragItem(dragItemB);
    var dragItemC:any = document.getElementById("C1");
    t.addDragItem(dragItemC);
    
    var dragBox:any = document.getElementById("mapFlow");
    // dragBox.addEventListener("click", (e:any) => {
    //   console.log(JSON.stringify(e.data));
    //   // alert(JSON.stringify(e.data));
    // });
    t.setDragBox(dragBox);
    tuiFlowChartRef.value = t;
  }, 1);
}
const onEvent = (e:any) => {
  console.log('eventName:'+e.type, JSON.stringify(e.data));
  // alert(JSON.stringify(e.data));
}
const tuiFlowChartClear = () => {
  tuiFlowChartRef.value.clear();
}
const tuiFlowChartInput = () => {
  ElMessageBox.prompt("数据导入", "数据格式：JSON", {
    confirmButtonText: '好的',
    cancelButtonText: '取消',
  }).then(({value}) => {
    let data = null;
    if(value){
      data = JSON.parse(value);
    }else{
      data = [
        {
          "sourceId":"B1",
          id: "12341234",
          x: 100,
          y: 230,
          w: 250,
          value: "12341234",
          context: "111",
          state: "OK"
        }
      ];
    }
    tuiFlowChartRef.value.load(data);
  })
}
const tuiFlowChartOutput = () => {
  const data = tuiFlowChartRef.value.getData();
  console.log("tuiFlowChartOutput:" + data.length);
  ElMessage(JSON.stringify(data));
}
const tuiFlowChartZoomIn = () => {
  tuiFlowChartRef.value.zoomIn();
}
const tuiFlowChartZoomOut = () => {
  tuiFlowChartRef.value.zoomOut();
}
const tuiFlowChartChangeValue = () => {
  templateSpan.value = Math.random().toString();
}
const tuiFlowChartMove = () => {
  const ulBox:any = document.getElementById('ulBox');
  const target:any = document.createElement('li');
  target.id = "target";
  ulBox.appendChild(target, ulBox.firstElementChild);
  const dom:any = document.getElementById('C1');
  const domClone:any = dom.$clone(); //dom.cloneNode(true);
  target.appendChild(domClone);
}
const tuiFlowChartZoomOpen = () => {
  var w:any = window;
  var t = new w.tuiZoom();
  let zoomImage = document.getElementById("mapFlow");
  t.setTarget(zoomImage);
}
const tuiFlowChartZoomClose = () => {
}
onMounted(() => {
})

const onLoginEvent = () => {
  isSwitch.value = !isSwitch.value;
}
</script>

<style lang="scss">
body {
  margin: 0 !important;
  padding: 0 !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>