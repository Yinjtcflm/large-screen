import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { createEchartsOptions } from "../shared/create-echarts-options";
import china from "../geo/china.json";

export const Chart6 = () => {
  const divRef = useRef(null);
  const colors = { 青海省: "#BB31F7", 甘肃省: "#15b8fd", 四川省: "#06e1ee" };
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    // @ts-ignore
    echarts.registerMap("CN", china);
    myChart.setOption(
      createEchartsOptions({
        xAxis: { show: false },
        yAxis: { show: false },
        series: [
          {
            type: "map",
            mapTap: "CN",
            data: [
              {
                name: "甘肃省",
                value: 1,
              },
            ],
            label: { show: false, color: "white" },
            itemStyle: {
              areaColor: "#010d3d",
              color: colors["甘肃省"],
              borderColor: "#01a7f7",
              emphasis: {
                label: { color: "white" },
                areaColor: "#5470c6",
              },
            },
          },
          {
            type: "map",
            mapTap: "CN",
            data: [
              {
                name: "四川省",
                value: 100,
              },
            ],
            itemStyle: {
              areaColor: "#010d3d",
              color: colors["四川省"],
              borderColor: "yellow",
              emphasis: {
                label: { color: "white" },
                areaColor: "#5470c6",
              },
            },
          },
          {
            type: "map",
            mapTap: "CN",
            data: [
              {
                name: "青海省",
                value: 100,
              },
            ],
            itemStyle: {
              areaColor: "#010d3d",
              color: colors["青海省"],
              borderColor: "#01a7f7",
              emphasis: {
                label: { color: "white" },
                areaColor: "#5470c6",
              },
            },
          },
        ],
      })
    );
  }, []);
  return (
    <div className="bordered 籍贯分布">
      <h2>全兰州市犯罪人员籍贯分布地</h2>
      <div className="wrapper">
        <div ref={divRef} className="chart" />
        <div className="legend bordered">
          <span className="icon" style={{ background: colors["甘肃省"] }} />
          甘肃籍
          <span className="icon" style={{ background: colors["四川省"] }} />
          四川籍
          <span className="icon" style={{ background: colors["青海省"] }} />
          青海籍
        </div>
        <div className="notes">此地图只显示了部分中国区域</div>
      </div>
    </div>
  );
};
