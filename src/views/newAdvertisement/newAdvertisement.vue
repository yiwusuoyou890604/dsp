<template>
<div class="boxx">
    <div class="lefts">
        <el-tree
        style="background:#F5F5F5;"
        :data="data"
        :props="defaultProps"
        accordion
        :indent=8
        :highlight-current=true
        node-key="id"
        :default-expanded-keys="[1, 2, 3]"
        @node-click="handleNodeClick">
      </el-tree>
    </div>  
    <div class='rights'>
        <el-row>
            <el-col :class="'title'" :span="24">
                广告创意
            </el-col>
            <el-col :class="'page'" :span="24">
                落地页
            </el-col>
        </el-row>
        <el-row type="flex" :class="'idea'">
            <el-col :span="4" :class="'address'">
                着陆页地址:
            </el-col>
            <el-col :span="20">
                <el-form  :class="'ipt'">
                     <el-form-item>
                        <el-input placeholder="请设置广告名称"></el-input>
                    </el-form-item>
                </el-form>
                <span>预览</span>
            </el-col>
        </el-row>
        <el-row :class="'upload'">
            <el-col :class="'uploadidea'" :span="24">
                上传创意
            </el-col>
            <!-- <el-col :class="'Originalitytype'" :span="24">
               <span>创意一</span><span>创意二</span><span :class="'addidea'">+添加创意</span>
            </el-col> -->
            <el-col :class="'addidea'" :span="24">
                +添加创意
            </el-col>
        </el-row>
        <el-row :class="'submit'">
            <el-col :span="24">
                <el-button :class="'submitbutton'" @click="btns">提交</el-button>
            </el-col>
        </el-row>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          id:1,
          label: "建立广告",
          style:"font-weight:bold",
          children: [
            {
              label: "广告计划",
            }
          ]
        },
        {
          id:2,
          label: "广告单元",
          children: [
            {
              label: "基本信息"
            },
            {
              label: "定向",
            },
            {
              label: "广告位",
            },
            {
              label: "出价",
            }
          ]
        },
        {
          id:3,
          label: "广告创意",
          children: [
            {
              label: "落地页",
            },
            {
              label: "上传创意",
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
      btns(){
          console.log("a")
      },
    handleNodeClick(data) {
      console.log(data)
      data.$treeNodeId == 1 && (location.href = '/#/state/newConstruction/establishPlan')
    }
  }
};
</script>

<style lang='less' scoped>
.boxx{
    width:100%;
    height:100%;
    margin:0;
    padding:0;
    display:flex;
    .lefts{
        width:144px;
        height:100%;
        background:#f5f5f5;
        padding-top:60px;
        
    }
    .rights{
        width:50%;
        height:100%;
        padding-left:10px;
        display:inline-block;
        .title{
            font-size:40px;
            text-align:left;
            font-family:'MicrosoftYaHei';
            margin-top:30px;
            margin-left:10px;
        };
        .page,.uploadidea{
            font-size:26px;
            text-align:left;
            font-family:'MicrosoftYaHei';
            font-weight:700;
            margin-top:30px;
            margin-left:10px;
        }
        .idea{
            margin-top:30px;
            margin-left:10px;
            text-align:left;
            height:50px;
        }
        .ipt{
            width:432px;
            height:32px;
            display:inline-block;
        }
        .address{
            line-height:40px;
        }
        .upload{
            margin-top:30px;
        }
        .addidea{
            color:#2873FF;
            font-size:16px;
            text-align:left;
            font-family:'MicrosoftYaHei';
            margin-top:20px;
            margin-left:10px;
        }
        .Originalitytype{
            margin-top:20px;
            margin-left:10px;
            font-family:'MicrosoftYaHei';
            text-align:left;
            font-size:16px;
            height: 40px;
            border-bottom:1px solid #ccc;
        }
        .Originalitytype span{
            margin-right:19px;
        }
        .Originalitytype span:hover{
            border-bottom:#FA8C16 solid 3px;
            color:#FA8C16;
            line-height:4px;
        }
        .Originalitytype .addidea{
            color:#2873FF;
        }
        .submit{
            width:100%;
            margin-top:50px;
            height:40px;
            border-top:1px solid #ccc;
            text-align:left;
        }
        .submitbutton{
            width:166px;
            height: 52px;
            background:#E8E8E8 ;
            margin-top:50px;
        }
    }
}



</style>