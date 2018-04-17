<template>
    <div class='toolbox'>
        <p>工具箱</p>
        <div class='lbox'>
            <div class='imgbox'>
                <img src="../../../static/imgs/img3.png" alt="">
            </div>
            <div class='titbox'>
                <p >账号管理<span class='iconfont icon-shuoming'></span></p>
                <p class='textcont'>
                    在中泰产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件， 这些类似的组件会被抽离成一套标准规范
                </p>
            </div>
        </div>
        <div class='rbox'>
            <div class='imgbox'>
                <img src="../../../static/imgs/img4.png" alt="">
            </div>
            <div class='titbox'>
                <p >客户管理<span class='iconfont icon-shuoming'></span></p>
                <p class='textcont'>
                    在中泰产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件， 这些类似的组件会被抽离成一套标准规范
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {

    };
</script>
<style lang='less'>
    .toolbox {
        padding: 24px;
        width:100%;
        height:100%;
        background: #eee;
        p {
            font-family: "heiti";
            font-size: 36px;
        }
        .lbox,.rbox {
            padding:12px 24px;
            width: 368px;
            height: 160px;
            background: #fff;
            margin-top: 32px;
            display:inline-block;
            position:relative;
            
            .imgbox{
               position:absolute;
               top:12px;
               left:24px;
                width:60px;
                height:60px;
                margin-bottom:20px;
                img{
                    width:100%
                }
            }
            .titbox{
                position:absolute;
               top:12px;
               left:80px;
                margin-left:24px;
                width:230px;
                p{
                    font-size:24px;
                }
                .textcont{
                    margin-top:5px;
                    font-size:14px;
                    line-height: 22px;
                    color:#555
                }
            }
        }
        .rbox {
            margin-left: 24px;
        }
    }
</style>