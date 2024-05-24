<template>
    <div class="ti_fBox_normal" id="A1">
        <div>
            <div class="ti_fBox_icon">Q</div>
            <span data-key="value">...</span>
            <div></div>
        </div>
        <div>
            <span data-key="title">...</span>
        </div>
        <div data-for="list">
            <span data-in="value">...</span>
            <span data-in="label">...</span>
        </div>
        <div>
            <span>CLASS2</span>
            <span>Featured services</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { FormProps, ElButton, ElDrawer } from 'element-plus'

onMounted(() => { })

</script>

<style lang="scss" scoped>
.ti_fBox_normal {
    color: #757575;
    background-color: #ffffff;
    width: 150px;
    padding: 5px;
    border-radius: 10px;
    font-size: 12px;
    box-shadow: 0px 0px 3px 0px rgb(88 88 88 / 20%);

    &>div {
        background: #f4f5f7;
        margin-top: 5px;
        border-radius: 5px;
        padding: 5px;
        text-align: left;
        
        &:first-child {
            display: flex;
            align-items: center;
            font-weight: bold;
            background-color: transparent;
        }
        &:not(:first-child) {
            color: #919191;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
        }
    }

    .ti_fBox_icon {
        margin-right: 5px;
    }
}
</style>