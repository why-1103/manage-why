import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import { pieOption } from '@/utils/chartsData';

function Doughnut(props: any) {
  // const myRef = useRef<any>(null);
  const initCharts = () => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main') as HTMLElement);
    // 绘制图表
    myChart.setOption(pieOption);
  };

  useEffect(() => {
    initCharts();
    return () => {};
  }, []);

  return <div id="main" style={{ width: 400, height: 400 }}></div>;
}

export default Doughnut;
