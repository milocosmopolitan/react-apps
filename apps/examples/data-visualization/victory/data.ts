export const ChartLegend = {
  InternalSuction: 'InternalSuction',
  ExternalSuction: 'ExternalSuction'
}

const margin = { top: 50, right: 110, bottom: 80, left: 60 };
const xScale = { type: 'point' };
const yScale = { type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }

export const ChartOptions = {
  TaperingRate: {
    margin, xScale, yScale: Object.assign(yScale, {max: 80}, {min: 0}),
    data: [
      {
        "id": "Internal Suction Only",
        "color": "hsl(255, 70%, 50%)",
        "data": [
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
        "id": "Internal Suction + External Suction",
        "color": "hsl(255, 70%, 50%)",
        "data": [
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
      },
    ],
    axisBottom: {
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Particle Size (μm)',
      legendOffset: 36,
      legendPosition: 'middle'
    },
    axisLeft: {
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Tapering Rate (%)',
        legendOffset: -40,
        legendPosition: 'middle'
    }
  }
}

export const ChartData = {
  TaperingRate: [
    {
      "id": "Internal Suction Only",
      // "color": "hsl(255, 70%, 50%)",
      "data": [
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
      "id": "Internal Suction + External Suction",
      // "color": "hsl(255, 70%, 50%)",
      "data": [
        { x: 1, y: 1 },
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
    },
  ]
}

// export const ChartData = [
//   {
//     name: 1,
//     [ChartLegend.InternalSuction]: 50,
//     [ChartLegend.ExternalSuction]: 0.2
//   },
//   {
//     name: 2,
//     [ChartLegend.InternalSuction]: 56,
//     [ChartLegend.ExternalSuction]: 0.1
//   },
//   {
//     name: 3,
//     [ChartLegend.InternalSuction]: 52,
//     [ChartLegend.ExternalSuction]: 0.1
//   },
//   {
//     name: 4,
//     [ChartLegend.InternalSuction]: 47.5,
//     [ChartLegend.ExternalSuction]: 0.2
//   },
//   {
//     name: 5,
//     [ChartLegend.InternalSuction]: 49,
//     [ChartLegend.ExternalSuction]: 0.4
//   },
//   {
//     name: 6,
//     [ChartLegend.InternalSuction]: 52,
//     [ChartLegend.ExternalSuction]: 0.3
//   },
//   {
//     name: 7,
//     [ChartLegend.InternalSuction]: 58,
//     [ChartLegend.ExternalSuction]: 0.2
//   },
//   {
//     name: 8,
//     [ChartLegend.InternalSuction]: 53,
//     [ChartLegend.ExternalSuction]: 0.1
//   },
//   {
//     name: 9,
//     [ChartLegend.InternalSuction]: 48.5,
//     [ChartLegend.ExternalSuction]: 0.3
//   },
//   {
//     name: 10,
//     [ChartLegend.InternalSuction]: 47,
//     [ChartLegend.ExternalSuction]: 0.2
//   },
// ];
