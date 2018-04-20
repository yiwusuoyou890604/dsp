# vuex

> dsp project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

<!-- <img src="" alt="" srcset=""> -->

#项目总结

## 技术选型
    vue + vuex + vue-cli + less +es6语法 +element-ui

    vue：轻量级框架，生命周期明确，支持组件化开发，并且有丰富的第三方组件，提供更强大的技术支持
    ，
    vueX: 针对vue特地开发的状态管理框架,延用redux的特点， 能够与vue更好的配合，不需要担心两者之间的性能问题。vuex中各个方法清晰明了，容易上手，(state:用来初始化数据， 并保存后续更新的数据， mutations:根据传来的参数更改数据，actions:根据dispatch函数来出发  ，  并且自身包含commit函数， 用来通知mutations函数更改数据)

    vue-cli：能够快速初始化一个vue项目，并提供封装好的webpack配置和node测试服务器，节省去了搭建webpack的时间，缺点， 不支持less, 需要单独下载

    less-loader  并且在webpack中添加支持less的配置

    less:兼容css，语法结构清晰直观，支持复用， 方便后期维护

    es6语法:扩展了新的语法和概念，例如箭头函数和对象扩展符

## 路由搭建
    路由是由登录页、首页、新建广告、广告管理(广告计划、广告单元、广告创意)、数据中心、工具箱页面组成，路由搭建采用了导航守卫(beforeEach)来判断跳转路由，在跳转时判断用户是否登录(根据token),如果登录则可以跳转下个路由，否则调回login页

## 数据请求以及数据接口
    封装axios用于请求数据并封装了axios的中间件， 用于判断node模拟服务返回的数据是否合格，合格之后再返回，并通过原生js的defineProperty将封装好的axios方法挂载在vue实例上
    后台数据接口采用node搭建静态服务来模拟后台接口

##功能模块
###登录
    点击登录时讲获取到的用户名和密码传至后台生成token字段然后返回，并将token字段保存在vuex和localstateage方便后面调用，  然后判断登录状态是否正确，根据判断结果进行跳转页面

### home页
    登录之后跳转至home页面，  页面采用Element-ui进行排版  图表部分使用echarts图表，图表根据echarts组件的日历输入框取值来动态更改数据， 但是取值存在bug，日期选择组件，记录选择的开始日期和结束日期，将日期形式转为以月为单位，计算差值，遍历差值，差值/12为年份再%12，%12为0则月份从0开始，不为0拼接，则可打印出差值的年份及月份

###新建广告 
    点击创建广告之后跳转二级路由，显示创建广告页面，点击添加创意添加进去tab切换， 然后点击上传图片后传到node模拟接口根据后台返回的数据，和写成的文件展示到页面，点击添加创意是是自己封装的组件来实现，最初定义只显示一个创意， 点击添加时想数据内追加数据(push数据)，然后vue根据数据自行渲染结构， 点击提交创意时将信息提交至后台，并在广告计划页面渲染显示，发送http请求时，图片会以二进制流的形式进行传送，所以需要在后台自己配置接受图片的接口

###数据管理
    数据管理主要是使用vuex进行管理的，vueX就像一个大的数据容器，把项目中需要的数据存放到一起进行管理，好处就是在项目的任意组件内，都可以对数据进行访问、操作，更容易实现数据驱动视图的目的，而且Vue + Vuex 会更简洁，也不需要考虑性能问题




