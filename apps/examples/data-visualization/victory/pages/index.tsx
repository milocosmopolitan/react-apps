import React from 'react';
import styled from '@emotion/styled';
import './index.scss';

import { ReactComponent as NxLogo } from '../assets/nx-logo-white.svg';
import { environment } from '../environments/environment';
import { VictoryChart, VictoryLine, VictoryScatter } from 'victory';

import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  DiscreteColorLegend
} from 'react-vis';

const Chart = {
  TaperingRate: {
    lines: [
      {
        label: 'IntraOral Suction',
        color: 'red',
        data: [
          { x: 1, y: 50 },
          { x: 2, y: 56 },
          { x: 3, y: 52 },
          { x: 4, y: 47.5 },
          { x: 5, y: 49 },
          { x: 6, y: 52 },
          { x: 7, y: 58 },
          { x: 8, y: 53 },
          { x: 9, y: 48.5 },
          { x: 10, y: 47 }
        ]
      },
      {
        label: 'IntraOral + External Oral Suction',
        color: '#6588cd',
        data: [
          { x: 1, y: 0.2 },
          { x: 2, y: 0.1 },
          { x: 3, y: 0.1 },
          { x: 4, y: 0.2 },
          { x: 5, y: 0.4 },
          { x: 6, y: 0.3 },
          { x: 7, y: 0.2 },
          { x: 8, y: 0.1 },
          { x: 9, y: 0.3 },
          { x: 10, y: 0.2 }
        ]
      }
    ]
  },
  CollectingRate: {
    lines: [
      {
        label: 'IntraOral Suction',
        color: 'red',
        data: [
          { x: 1, y: 39.3 },
          { x: 2, y: 37 },
          { x: 3, y: 35 },
          { x: 4, y: 40.7 },
          { x: 5, y: 31 },
          { x: 6, y: 29.4 },
          { x: 7, y: 29.45 },
          { x: 8, y: 28.6 },
          { x: 9, y: 26.7 },
          { x: 10, y: 22.4 }
        ]
      },
      {
        label: 'IntraOral + External Oral Suction',
        color: '#6588cd',
        data: [
          { x: 1, y: 79.7 },
          { x: 2, y: 88 },
          { x: 3, y: 84.2 },
          { x: 4, y: 94.5 },
          { x: 5, y: 95 },
          { x: 6, y: 96 },
          { x: 7, y: 94.8 },
          { x: 8, y: 84.5 },
          { x: 9, y: 84 },
          { x: 10, y: 74 }
        ]
      }
    ]
  },
  WhatIsThis: {
    lines: [
      {
        label: '0.3μm',
        color: '#76dfca',
        data: [
          // { x: '???', y: 10000 },
          { x: 1, y: 90000 },
          { x: 2, y: 45000 },
          { x: 3, y: 15000 }
        ]
      },
      {
        label: '0.5μm',
        color: '#65b5c0',
        data: [
          // { x: '???', y: 1000 },
          { x: 1, y: 55000 },
          { x: 2, y: 7500 },
          { x: 3, y: 3500 }
        ]
      },
      {
        label: '1.0μm',
        color: '#528db5',
        data: [
          // { x: '???', y: 100 },
          { x: 1, y: 15000 },
          { x: 2, y: 1500 },
          { x: 3, y: 500 }
        ]
      },
      {
        label: '2.0μm',
        color: '#3866a9',
        data: [
          // { x: '???', y: 100 },
          { x: 1, y: 15000 },
          { x: 2, y: 850 },
          { x: 3, y: 100 }
        ]
      },
      {
        label: '5.0μm',
        color: '#00429d',
        data: [
          // { x: '???', y: 20 },
          { x: 1, y: 800 },
          { x: 2, y: 20 },
          { x: 3, y: 5 }
        ]
      },
    ]
  },
}


const StyledChartContainer = styled.div`
  width: 716px;
  fontSize: 14px;
`;

const CenterContainer = styled.div((props: any) => ({
  display: 'flex',
  justifyContent: 'center',
  marginLeft: `${props.margin && props.margin.left ? props.margin.left : 0}px`,
  marginRight: `${props.margin && props.margin.right ? props.margin.right : 0}px`,
  marginTop: `${props.margin && props.margin.top ? props.margin.top : 0}px`,
  marginBottom: `${props.margin && props.margin.bottom ? props.margin.bottom : 0}px`
}))

// const CenterContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-left: 80px;
// `;

const SplitContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: row;  
`;


const LineChartXAxisFormatter = (v) => {
  switch(v) {
    case 1:
      return 'Case A';
    case 2:
      return 'Case B'
    case 3:
      return 'Case C'
  }
}
// const BarChart = (props: any) => {

// }

const getFlexDirection = (direction: string) => {
  switch(direction) {
    case 'right':
      return 'row';
    case 'left':
      return 'row-reverse';
    case 'top':
      return 'column-reverse';
    case 'bottom':
      return 'column';
    default:
      return 'column';
  }
}

const LineChartContainer = styled.div((props: any) => ({
  display: 'flex',
  flexDirection: getFlexDirection(props.legendPosition)
}));

const FloatContainer = styled.div`
position: absolute;
bottom: 0;
`;

const LineChart = (props: any) => {
  return (
    <LineChartContainer {...props}>
      <XYPlot
        yType={props.yType}
        xType={props.xType}
        
        yDomain={props.yDomain}
        height={360}
        width={358}
        margin={{left: 80, right: 20, top: 10, bottom: 80}}
        >
        <VerticalGridLines tickTotal={props.xAxisTickTotal}/>
        <HorizontalGridLines />
        <XAxis
          title={props.xAxisLabel}
          position="middle"
          top={330}
          style={{
            line: {stroke: 'none'},
          ticks: {stroke: 'none'},
          text: {stroke: 'none', fontWeight: 300, fontSize: 0},
          }}/>
        
        <XAxis
          tickSize={props.xAxisTickSize}
          tickFormat={props.xAxisTickFormat}
          tickTotal={props.xAxisTickTotal}
          style={{
            text: { fontWeight: 300, fontSize: 10 },
          }}/>

        <YAxis title={props.yAxisLabel} position="middle" left={-70}
        style={{
          line: {stroke: 'none'},
          ticks: {stroke: 'none'},
          text: {stroke: 'none', fontWeight: 300, fontSize: 0},
        }}></YAxis>
        <YAxis
          left={0}
          tickFormat={props.yAxisTickFormat}
          style={{
            text: {stroke: 'none', fontWeight: 300, fontSize: 10},
          }}/>
        {props.lines && props.lines.length && props.lines.map(line => (<LineSeries data={line.data} color={line.color} />))}        
      </XYPlot>
      <CenterContainer margin={props.legendMargin}>
        <DiscreteColorLegend
          colors={props.lines && props.lines.length ? props.lines.map(line => line.color) : []}
          orientation="vertical"
          width={props.legendMargin || 140}
          items={props.lines && props.lines.length ? props.lines.map(line => line.label) : []}
        />
      </CenterContainer>
      
    </LineChartContainer>

  )
}



class Index extends React.Component<any, any> {
  state: any = {
    hoveredItem: false
  };
  constructor(props: any) {
    super(props);
    // this.state = {
    //   interpolation: "linear",
    //   polar: false
    // };
  }
  render() {
    const {hoveredItem} = this.state;
    return (
      <CenterContainer>
        <StyledChartContainer>
          <SplitContainer>
            <LineChart
              legendMargin={{left: 80}}
              legendWidth={240}
              margin={{left: 80, right: 20, top: 10, bottom: 80}}
              yType='linear'
              yDomain={[0,100]}
              xAxisLabel="Particle Size (μm)"
              yAxisLabel="Tapering Rate (%)"
              xAxisTickSize={1}
              xAxisTickTotal={9}
              lines={Chart.TaperingRate.lines} />
            <LineChart
              legendMargin={{left: 80}}
              legendWidth={240}
              margin={{left: 80, right: 20, top: 10, bottom: 80}}
              yType='linear'
              yDomain={[0,100]}
              xAxisLabel="Particle Size (μm)"
              yAxisLabel="Collecting Rate (%)"
              xAxisTickSize={1}
              xAxisTickTotal={9}
              lines={Chart.CollectingRate.lines} />
            

          </SplitContainer>
          <CenterContainer>
            <LineChart
              margin={{left: 80, right: 30, top: 10, bottom: 80}}
              yType='log'
              // xType='literal'
              legendPosition="right"
              legendWidth={200}
              yDomain={[1,1000000]}
              yAxisLabel="No. of particles"
              yAxisTickFormat={v => v}
              xAxisTickFormat={LineChartXAxisFormatter}
              xAxisTickSize={1}
              xAxisTickTotal={2}
              lines={Chart.WhatIsThis.lines} />
            <LineChart />

          </CenterContainer>

        </StyledChartContainer>
      
      </CenterContainer>
      
    );
  }
}


export default Index;
