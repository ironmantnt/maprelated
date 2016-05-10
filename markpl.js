// 初始化地图
var BMapExt = new BMapExtension(domMain, BMap, require('echarts'), require('zrender'));
var map = BMapExt.getMap();
var container = BMapExt.getEchartsContainer();
var point = new BMap.Point(startPoint.x, startPoint.y);
var  mapStyle ={ 
        styleJson:[
          {
                    "featureType": "land",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#212121"
                    }
          },
          {
                    "featureType": "building",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#2b2b2b",
                              "visibility": "off"
                    }
          },
          {
                    "featureType": "highway",
                    "elementType": "all",
                    "stylers": {
                              "lightness": -42,
                              "saturation": -91
                    }
          },
          {
                    "featureType": "arterial",
                    "elementType": "geometry",
                    "stylers": {
                              "lightness": -77,
                              "saturation": -94
                    }
          },
          {
                    "featureType": "green",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#1b1b1b"
                    }
          },
          {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#181818"
                    }
          },
          {
                    "featureType": "subway",
                    "elementType": "geometry.stroke",
                    "stylers": {
                              "color": "#181818",
                              "visibility": "off"
                    }
          },
          {
                    "featureType": "railway",
                    "elementType": "geometry",
                    "stylers": {
                              "lightness": -52
                    }
          },
          {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                              "color": "#313131"
                    }
          },
          {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": {
                              "color": "#8b8787"
                    }
          },
          {
                    "featureType": "manmade",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#1b1b1b",
                              "visibility": "off"
                    }
          },
          {
                    "featureType": "local",
                    "elementType": "geometry",
                    "stylers": {
                              "lightness": -75,
                              "saturation": -91,
                              "visibility": "off"
                    }
          },
          {
                    "featureType": "subway",
                    "elementType": "geometry",
                    "stylers": {
                              "lightness": -65,
                              "visibility": "off"
                      
                    }
          },
          {
                    "featureType": "railway",
                    "elementType": "all",
                    "stylers": {
                              "lightness": -40
                    }
          },
          {
                    "featureType": "boundary",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#8b8787",
                              "weight": "1",
                              "lightness": -29,
                              "visibility": "off"
                    }
          }
          ]
    }
map.setMapStyle(mapStyle);
map.centerAndZoom("上海",12); 
map.enableScrollWheelZoom(true);


option = {
    color: ['gold','aqua','lime'],
    toolbox: {
        show : true,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    dataRange: {
        min : 0,
        max : 100,
        y: '60%',
        calculable : true,
        color: ['#ff3333', 'orange', 'yellow','lime','aqua']
    },
       series : [
        {
            name: 'SH',
            type: 'map',
            roam: true,
            hoverable: false,
            mapType: 'none',
            itemStyle:{
                normal:{
                    borderColor:'rgba(100,149,237,1)',
                    borderWidth:0.5,
                    areaStyle:{
                        color: '#1b1b1b'
                    }
                }
            },
            data:[],
            markLine : {
                smooth:true,
                symbol: ['none', 'circle'],  
                symbolSize : 1,
                itemStyle : {
                    normal: {
                        color:'#fff',
                        borderWidth:1,
                        borderColor:'rgba(30,144,255,0.5)'
                    }
                },
                data : [
                  
                ],
            },
            geoCoord: {
                '莘庄': [121.3921,31.1166],
                '徐家汇': [121.4450,31.1996],
                '五角场': [121.5211,31.3058],
              	'上海站': [121.4624,31.2566],
                '中山公园': [121.4219,31.2258],
              	'上海虹桥站': [121.3295,31.2013],
              	'打浦桥': [121.4751,31.2122],
              	'静安寺': [121.4544,31.2298],
              	'人民广场': [121.4807,31.2398],
              	'新天地': [121.4803,31.2274],
                '陆家嘴': [121.5087,31.2434],
              	'南京东路': [121.4934,31.2439],
              	'龙阳路': [121.5644,31.2095],
              	'世纪大道': [121.5325,31.2351],
              	'上海南站': [121.4371,31.1623],
                '龙阳小区1':[121.5678,31.1902],
                '龙阳小区2':[121.5432,31,2133],
                '龙阳小区3':[121.5671,31,2299]
            }
        },
        {
            name: '北京 Top10',
            type: 'map',
            mapType: 'none',
            data:[],
            markLine : {
                smooth:true,
                effect : {
                    show: true,
                    scaleSize: 1,
                    period: 30,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle : {
                    normal: {
                        borderWidth:1,
                        lineStyle: {
                            type: 'solid',
                            shadowBlur: 10
                        }
                    }
                },
                data : [
                ]
            },
            markPoint : {
                symbol:'emptyCircle',
                symbolSize : function (v){
                    return 10 
                },
                effect : {
                    show: true,
                    shadowBlur : 0
                },
                itemStyle:{
                    normal:{
                        label:{show: true,
                              formatter:null}
                    }
                },
                data : [
                  //{name:'莘庄',value:95},
                  //{name:'徐家汇',value:95},
                  //{name:'五角场',value:95},
                  //{name:'上海站',value:95},
                  //{name:'中山公园',value:95},
                  //{name:'上海虹桥站',value:95},
                  //{name:'打浦桥',value:95},
                  //{name:'静安寺',value:95},
                 // {name:'人民广场',value:95},
                  //{name:'新天地',value:95},
                  //{name:'陆家嘴',value:95},
                  //{name:'南京东路',value:95},
                  {name:'龙阳路',value:95},
                  //{name:'世纪大道',value:95},
                  //{name:'上海南站',value:95}
                ]
            }
        }
    ]
};

if (myChart && myChart.dispose) {
    myChart.dispose();
}
myChart = BMapExt.initECharts(container, curTheme);
window.onresize = myChart.resize;
BMapExt.setOption(option, true)
                    