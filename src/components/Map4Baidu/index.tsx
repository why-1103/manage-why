import { message } from 'antd';
import React, { useState, useEffect } from 'react';

const { BMap } = window;

interface IMap4Baidu {
  AddressDetail?: string;
  AddCallback?: any;
}

function Map4Baidu(props: IMap4Baidu) {
  const { AddressDetail, AddCallback } = props;
  const [map, setMap] = useState<any>();
  const [geo, setGeo] = useState<any>();

  useEffect(() => {
    initMap();
  }, []);

  useEffect(() => {
    try {
      if (AddressDetail && map && geo) {
        // 将地址解析结果显示在地图上,并调整地图视野
        geo.getPoint(
          AddressDetail, // '北京市海淀区'
          function (point: any) {
            if (point) {
              map.centerAndZoom(point, 16);
              map.clearOverlays();
              map.addOverlay(new BMap.Marker(point));
            }
          },
          // '北京市',
        );
      }
    } catch (error) {
      message.error('地图定位失败，请稍后重试');
    }
  }, [AddressDetail]);

  const initMap = () => {
    // setMap(map);
    const map = new BMap.Map('mapContainer'); // 创建Map实例
    var myGeo = new BMap.Geocoder(); // 创建地址解析器实例
    setMap(map);
    setGeo(myGeo);
    let mk;
    map.centerAndZoom('成都市', 12);
    map.enableScrollWheelZoom(); //启用滚轮放大缩小，默认禁用
    map.enableContinuousZoom(); //启用地图惯性拖拽，默认禁用
    map.enableInertialDragging();

    //添加选择城市的控件
    var size = new BMap.Size(50, 20);
    map.addControl(
      new BMap.CityListControl({
        anchor: 1,
        offset: size,
        // 切换城市之前
        onChangeBefore: function () {
          console.log('切换城市之前');
        },
        // 切换城市之后事件
        onChangeAfter: function () {
          console.log('切换城市之后');
        },
      }),
    );

    //单击获取点击的经纬度
    map.addEventListener('click', function (e) {
      const { point } = e;
      // map.removeOverlay(mk);
      map.clearOverlays();
      mk = new BMap.Marker(point);
      map.addOverlay(mk);
      myGeo.getLocation(point, function (rs: any) {
        //addressComponents对象可以获取到详细的地址信息
        var addComp = rs.addressComponents;
        console.log('addComp', addComp);
        const { province, city, district, street, streetNumber } = addComp;
        const site = `${
          province === city ? '' : province
        }${city}${district}${street}${streetNumber}`;
        if (AddCallback) {
          AddCallback(site);
        }
        console.log('当前定位地址为：', site); //详细地址
      });
    });

    // 添加带有定位的导航控件
    var navigationControl = new BMap.NavigationControl({
      // 靠左上角位置
      anchor: 0, // BMAP_ANCHOR_TOP_LEFT,
      // LARGE类型
      type: 0, //BMAP_NAVIGATION_CONTROL_LARGE,
      // 启用显示定位
      enableGeolocation: true,
    });
    map.addControl(navigationControl);
  };

  return <div id="mapContainer" style={{ width: 800, height: 600 }}></div>;
}

export default Map4Baidu;
