<template>
    <div class="mymessage">
        <Header></Header>
        <div class="message">
            <div class="left">
                <img src="../../assets/img/pic01.png" alt="" />
                <div class="text">
                    <h2>姓名：</h2>
                    <p>梵歌</p>
                    <h2>个性签名：</h2>
                    <p>爱吃爱谁爱玩哈哈</p>
                    <h2>联系方式：</h2>
                    <p>189-4300-6095</p>
                </div>
            </div>
            <div class="right">
                <div class="cards">
                    <div class="card">
                        <h2>个人技能</h2>
                        <div id="myCharts" ref="myCharts" class="echarts"></div>
                    </div>
                    <div class="card">
                        <h2>活动</h2>
                        <div class="echarts two">
                            <div id="myCharts21" ref="myCharts21"></div>
                            <div id="myCharts2" ref="myCharts2"></div>
                        </div>
                    </div>
                </div>
                <div class="cards">
                    <div class="card">
                        <h2>运动摘要</h2>
                        <div class="echarts">
                            <h2 class="text">36d 19h 31m</h2>
                            <p class="suntit">总持续时间</p>
                            <div class="content">
                                <div>
                                    <h2 style="text-align: left;font-size: 18px;font-weight: bold;color: #292b33">30,200卡尔</h2>
                                    <p style="text-align: left">卡路里</p>
                                </div>
                                <div>
                                    <h2 style="text-align: left;font-size: 18px;font-weight: bold;color: #292b33">1,200千米</h2>
                                    <p style="text-align: left">距离</p>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div class="card">
                        <h2>兴趣爱好</h2>
                        <div id="myCharts4" ref="myCharts4" class="echarts"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "./Header"
    export default {
        name: "MyMessage",
        components: {
            Header
        },
        mounted(){
            const  myCharts = this.$echarts.init(this.$refs.myCharts);
            const  myCharts2 = this.$echarts.init(this.$refs.myCharts2);
            const  myCharts21 = this.$echarts.init(this.$refs.myCharts21);
            const  myCharts4 = this.$echarts.init(this.$refs.myCharts4);
            let options = {
                 color: ["#1e1e24"],// 设置柱状图的颜色
                 textStyle: {
                     color: "#828282"
                 },
                 tooltip: {
                     trigger: "axis",
                     axisPointer: {
                         type: "line"
                     }
                 },
                 grid: {
                     left: "3%",
                     right: "4%",
                     bottom: "3%",
                     containLabel: true
                 },
                 xAxis: {
                     type: "value",
                     // 设置x轴显示几段
                     show: false,
                     min: 0,
                     max: 150,
                     interval: 50,
                     axisTick: { show: false },
                     axisLine: {
                         lineStyle: {
                             color: "transparent"
                         }
                     }
                 },
                 yAxis: {
                     type: "category",
                     data: ["ps", "javascript", "html", "css", "vue"],
                     axisLine: {       //y轴
                         show: false
                     },
                     axisTick: {       //y轴刻度线
                         show: false
                     },
                     splitLine: {     //网格线
                         show: false
                     },
                     inside: true,
                     textStyle: {
                         color: "#000"
                     }
                 },
                 series: [
                     {
                         type: "bar",
                         itemStyle: {
                             normal: {
                                 color: "#f2f2f2",// 定义柱形的背景色
                             }
                         },
                         barGap: "-100%", //设置柱形重合的重要步骤
                         data: [150, 150, 150, 150, 150],
                         animation: false, // 关闭动画效果
                         barWidth: "10px",// 设置柱形宽度
                     },
                     {
                         type: "bar",
                         data: [65, 75, 85, 110, 80],
                         label: {
                             formatter: "{c}"+"%",
                             show: true,
                             position: 'right',
                             textStyle:{
                                 color:"#292b33"
                             }

                         },
                         barWidth: "10px",
                         barGap: "-100%", //设置柱形重合的重要步骤

                     }
                 ]}
            let options21 = {
                title: {
                    text: '36%',
                    subtext: '失效时间',
                    bottom: '0',
                    left: 'center'
                },
                color:['#fdefdf','#fac994'],
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['40%', '55%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            {value: 120},
                            {value: 60},

                        ]
                    }

                ]
            }
            let options2 = {
                title: {
                    text: '64%',
                    subtext: '活动时间',
                    bottom: '0',
                    left: 'center'
                },
                color:['#f2f2f2','#292b33'],
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['40%', '55%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            {value: 120},
                            {value: 60},

                        ]
                    }

                ]
            }
            let options4 = {
                color: ["#fac994"],// 设置柱状图的颜色
                textStyle: {
                    color: "#828282"
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "line"
                    }
                },
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "3%",
                    containLabel: true
                },
                xAxis: {
                    type: "value",
                    // 设置x轴显示几段
                    show: false,
                    min: 0,
                    max: 150,
                    interval: 50,
                    axisTick: { show: false },
                    axisLine: {
                        lineStyle: {
                            color: "transparent"
                        }
                    }
                },
                yAxis: {
                    type: "category",
                    data: ["足球", "篮球", "乒乓球", "排球", "橄榄球"],
                    axisLine: {       //y轴
                        show: false
                    },
                    axisTick: {       //y轴刻度线
                        show: false
                    },
                    splitLine: {     //网格线
                        show: false
                    },
                    inside: true,
                    textStyle: {
                        color: "#000"
                    }
                },
                series: [
                    {
                        type: "bar",
                        itemStyle: {
                            normal: {
                                color: "#fdefdf",// 定义柱形的背景色
                            }
                        },
                        barGap: "-100%", //设置柱形重合的重要步骤
                        data: [150, 150, 150, 150, 150],
                        animation: false, // 关闭动画效果
                        barWidth: "10px",// 设置柱形宽度
                    },
                    {
                        type: "bar",
                        data: [130, 110, 80, 65, 75],
                        barWidth: "10px",
                        barGap: "-100%", //设置柱形重合的重要步骤

                    }
                ]}
            myCharts.setOption(options);
            myCharts2.setOption(options2);
            myCharts21.setOption(options21);
            myCharts4.setOption(options4);
        }

    }
</script>


<style scoped lang="stylus">
    .mymessage
        width 100%
        height 800px
        background #f2f2f2
        .message
            width 85%
            margin auto
            display flex
            color #292b33
            font-size 14px
            text-align center
            .left
                width 17%
            img
                width 80px
                margin 50px auto 60px
            .text
                padding-left 75px
            h2
                font-size 16px
                line-height 40px
                text-align left
            p
                line-height 20px
                margin-bottom 20px
                text-align left
            .right
                width 83%
                margin 40px 0 0 90px
                .cards
                    display flex
                    height 260px
                    margin-bottom 30px
                    .card
                        position relative
                        width 45%
                        margin-left 30px
                        background #ffffff
                        box-shadow 2px 2px 2px #f2f2f2
                        color #333
                        line-height 30px
                        h2
                            text-align right
                            padding-right 20px
                        .echarts
                            width 80%
                            margin auto
                            height 230px
                            position absolute
                            top 20px
                            left 40px
                            .content
                                margin-top 50px
                                display flex
                                padding-left 30px
                                div
                                    width 50%
                                    color #c6c6c7
                            .text
                                font-size 20px
                                font-weight bolder
                                line-height 40px
                                color #292b33
                                text-align left
                                padding-left 30px
                                margin-top 30px
                            .suntit
                                padding-left 30px
                                font-size 14px
                                line-height 20px
                                color #c6c6c7
                        .two
                            display flex

                            div
                                width 50%





</style>