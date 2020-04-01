/* global $: true */
$(function(){
  var myChart = echarts.init(document.getElementById('main'));

  var xDate=[],
      yDate=[];
  for(var i=0;i<=1;i+=0.01){
    xDate.push(i);
    if(i==0||i==1){
      yDate.push(0)
    }
    else{
    yDate.push(-i*Math.log2(i)-(1-i)*Math.log2(1-i))
    }
  }
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: xDate
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'line',
                smooth:true,
                data: yDate
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

});
