<template>
    <div class='planbox'>
        <p class='h1'>广告计划</p>
        <p class='h4'>
            <span class='sp1'>所有广告计划></span>
            <span class='sp2'>广告测试团队-20171102-4</span>
        </p>
        <div class="tits">
            <span class='sp1'>计划id:</span>
            <span class='sp2'>20171102</span>
            <span class='sp3'>投放目的:<b>网页</b></span>
            <span class='sp4'>日预算(元):<b>3400</b></span>
        </div>
        <div class="tabs">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="广告计划" name="first">
                    <div class="onebox">
                        <div class="input-box">
                            <el-input placeholder="请输入内容" v-model="input3">
                                <template slot="prepend">单元名称</template>
                            </el-input>
                        </div>
                        <div class="input-box2">
                            <span>状态</span>
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <button class='btn'>查询</button>
                    </div>
                    <div class="twobox">
                        <span class='sp1'>+新建单元</span>
                        <el-select v-model="value" placeholder="批量修改">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                        </el-select>
                        <el-date-picker
                            v-model="value1"
                            type="date"
                            placeholder="请选择订单日期">
                        </el-date-picker>
                        <el-select v-model="value" placeholder="自定义列">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                        </el-select>

                    </div>
                    <div class="three">
                        <el-table
                            ref="multipleTable"
                            :data="tableData3"
                            tooltip-effect="dark"
                            style="width: 100%"
                            @selection-change="handleSelectionChange">
                            <el-table-column
                            type="selection"
                            width="30">
                            </el-table-column>
                            <el-table-column
                               
                                width="60">
                                <template slot-scope='scope'>   
                                    <el-switch
                                        v-model="valuea"
                                        active-color="#13ce66"
                                        inactive-color="#ff4949">
                                    </el-switch>
                                </template> 

                            </el-table-column>
                            <el-table-column
                                label="单元ID"
                                width="70">
                            <template slot-scope="scope">{{ scope.row.date }}</template>
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="单元名称"
                                width="100">
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="投放周期"
                                width="140"
                                show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="定向"
                                width="200"
                                show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="广告位"
                                width="100"
                                show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="出价方式"
                                width="80"
                                show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="出价"
                                width="80"
                                show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="曝光量"
                                width="70"
                                show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="点击量"
                                width="70"
                                show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="点击率"
                                width="70"
                                show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="状态"
                                width="70"
                                show-overflow-tooltip>
                            </el-table-column>
                        </el-table>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="广告单元" name="second">
                    sdfaasdf 
                </el-tab-pane>
                <el-tab-pane label="广告创意" name="fourth">
                    123
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      valuea: true,
      values: true,
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: "",
      value2: "",
      activeName: "second",
      input3: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        }
      ],
      value: "",
      value1: "",
      tableData3: [
        {
          date: "1400-1",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: []
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>
<style lang='less'>
.planbox {
  width: 100%;
  padding: 14px 24px;
  .h1 {
    font-size: 30px;
  }
  .h4 {
    font-size: 20px;
    margin-top: 16px;
    .sp1 {
      color: #ccc;
    }
    .sp2 {
      color: #000;
    }
  }
  .tits {
    margin-top: 16px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 16px 0;
    .sp3 {
      margin-left: 64px;
    }
    .sp4 {
      margin-left: 64px;
    }
  }
  .tabs {
    .el-tabs__nav-scroll {
      height: 64px;
      padding-top: 24px;
    }
    .el-tab-pane {
      .onebox {
        background: #ccc;
        padding: 16px 0 16px 24px;
        display: flex;
        .input-box {
          .el-input-group--prepend {
            width: 440px;
          }
        }
        .input-box2 {
          margin-left: 28px;
          span {
            display: inline-block;
            line-height: 40px;
          }
        }
        .btn {
          width: 132px;
          background: #333;
          color: #fff;
          border: 0;
          border-radius: 6px;
          margin-left: 32px;
        }
      }
      .twobox {
        height: 64px;
        .sp1 {
          display: inline-block;
          margin: 12px 0 8px 24px;
          padding: 12px;
          background: #2873ff;
          color: #fff;
          border-radius: 6px 6px 6px 6px;
        }
        .el-select {
          width: 150px;
          margin-left: 16px;
        }
      }
      .threebox {
        width: 100%;
      }
    }
  }
}
</style>
