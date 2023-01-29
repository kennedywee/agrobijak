import React, { Component } from "react";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import RGL, { WidthProvider } from "react-grid-layout";
import TemperatureWidget from "./TemperatureWidget";
import AgroLineChart from "./AgroLineChart";

import _ from "lodash";

const ReactGridLayout = WidthProvider(RGL);
const originalLayout = getFromLS("layout") || [];

const data = [
  {
    id: 13,
    field1: 35,
    field2: 2,
    field3: 1,
    field4: 1,
    field5: 1,
    created: "2023-01-28T21:35:57.243508+08:00",
    device: 1,
  },
  {
    id: 12,
    field1: 35,
    field2: 1,
    field3: 1,
    field4: 1,
    field5: 1,
    created: "2023-01-28T21:35:48.587876+08:00",
    device: 1,
  },
  {
    id: 11,
    field1: 35,
    field2: 1,
    field3: 1,
    field4: 1,
    field5: 1,
    created: "2023-01-28T21:25:39.334886+08:00",
    device: 1,
  },
  {
    id: 10,
    field1: 35,
    field2: 1,
    field3: 1,
    field4: 1,
    field5: 1,
    created: "2023-01-28T21:25:36.944510+08:00",
    device: 1,
  },
  {
    id: 9,
    field1: 1,
    field2: 1,
    field3: 1,
    field4: 1,
    field5: 1,
    created: "2023-01-28T21:25:18.729815+08:00",
    device: 1,
  },
  {
    id: 8,
    field1: 35,
    field2: null,
    field3: null,
    field4: null,
    field5: null,
    created: "2023-01-28T21:25:17.630000+08:00",
    device: 1,
  },
  {
    id: 7,
    field1: 35,
    field2: null,
    field3: null,
    field4: null,
    field5: null,
    created: "2023-01-28T21:24:48.419710+08:00",
    device: 1,
  },
  {
    id: 6,
    field1: 1,
    field2: 1,
    field3: 1,
    field4: 1,
    field5: 1,
    created: "2023-01-28T19:47:16.482598+08:00",
    device: 1,
  },
  {
    id: 5,
    field1: 2,
    field2: 2,
    field3: 2,
    field4: 2,
    field5: 2,
    created: "2023-01-28T19:43:03.060328+08:00",
    device: 1,
  },
  {
    id: 4,
    field1: 4,
    field2: 4,
    field3: 4,
    field4: 4,
    field5: 4,
    created: "2023-01-28T18:36:12.995625+08:00",
    device: 1,
  },
  {
    id: 3,
    field1: 3,
    field2: 3,
    field3: 3,
    field4: 3,
    field5: 3,
    created: "2023-01-28T18:04:58.199521+08:00",
    device: 1,
  },
  {
    id: 2,
    field1: 2,
    field2: 2,
    field3: 2,
    field4: 2,
    field5: 2,
    created: "2023-01-28T18:04:20.390143+08:00",
    device: 1,
  },
  {
    id: 1,
    field1: 1,
    field2: 1,
    field3: 1,
    field4: 1,
    field5: 1,
    created: "2023-01-28T17:35:42.770731+08:00",
    device: 1,
  },
];

let widgets = [
  {
    id: 1,
    user: 2,
    type: "linechart",
    device: 2,
    datafield: 2,
    w: 7,
    h: 10,
    x: 0,
    y: 0,
    i: 1,
    moved: false,
    static: false,
    maxH: 10,
    minH: 5,
    maxW: 7,
    minW: 3,
  },
  {
    id: 2,
    user: 2,
    type: "temperature",
    device: 2,
    datafield: 2,
    w: 3,
    h: 4,
    x: 3,
    y: 2,
    i: 2,
    moved: false,
    static: false,
    maxH: 3,
    minH: 3,
    maxW: 4,
    minW: 4,
    isResizable: false,
  },
  {
    id: 3,
    user: 2,
    type: "",
    device: 2,
    datafield: 2,
    w: 3,
    h: 4,
    x: 3,
    y: 2,
    i: 4,
    moved: false,
    static: false,
    maxH: 3,
    minH: 3,
    maxW: 4,
    minW: 4,
    isResizable: false,
  },
];

export default class GridStorage extends Component {
  static defaultProps = {
    className: "layout",
    cols: 12,
    rowHeight: 30,
    onLayoutChange: function () {},
    isBounded: true,
  };

  constructor(props) {
    super(props);

    this.state = {
      layout: [],
    };

    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.resetLayout = this.resetLayout.bind(this);
  }

  resetLayout() {
    this.setState({
      layout: [],
    });
  }

  onLayoutChange(layout) {
    /*eslint no-console: 0*/
    //saveToLS("layout", layout);
    console.log(layout);
    this.setState({ layout });
    this.props.onLayoutChange(layout); // updates status display
  }

  generateLayout() {
    return _.map(widgets, function (widget) {
      return {
        x: widget.x,
        y: widget.y,
        w: widget.w,
        h: widget.h,
        i: widget.i.toString(),
        type: widget.type,
        maxH: 1,
        maxW: 1,
      };
    });
  }

  generateDOM() {
    const layout = this.generateLayout();
    return _.map(widgets, function (widget) {
      switch (widget.type) {
        case "temperature":
          return (
            <div className="border bg-white" key={widget.i} data-grid={widget}>
              <TemperatureWidget />
            </div>
          );
        case "linechart":
          return (
            <div className="border bg-white" key={widget.i} data-grid={widget}>
              <AgroLineChart deviceData={data} />
            </div>
          );
        default:
          return (
            <div className="border bg-white" key={widget.i} data-grid={widget}>
              <span>Something</span>
            </div>
          );
      }
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.resetLayout}>Reset Layout</button>
        <ReactGridLayout
          {...this.props}
          layout={this.state.layout}
          onLayoutChange={this.onLayoutChange}
        >
          {this.generateDOM()}
        </ReactGridLayout>
      </div>
    );
  }
}

function getFromLS(key) {
  let ls = {};
  if (localStorage) {
    try {
      ls = JSON.parse(localStorage.getItem("store")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (localStorage) {
    localStorage.setItem(
      "store",
      JSON.stringify({
        [key]: value,
      })
    );
  }
}
