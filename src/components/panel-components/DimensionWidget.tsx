import * as React from "react";
import PanelFields from "./PanelFields";

const DimensionsWidget = () => {
  const [width, setWidth] = React.useState<string>("width:auto");
  const [height, setHeight] = React.useState<string>("height:auto");
  const [maxHeight, setMaxHeight] = React.useState<string>("max-height:auto");

  // get width values
  const getWidthValues = (wv) => {
    const processData = processUnitsAndCss(wv);
    setWidth(`width:${processData.value}${processData.type}`);
  };

  // get height values
  const getHeightValues = (hv) => {
    const processData = processUnitsAndCss(hv);
    setHeight(`height:${processData.value}${processData.type}`);
  };

  // get max-height values
  const getMaxHeightValues = (mh) => {
    const processData = processUnitsAndCss(mh);
    setMaxHeight(`max-height:${processData.value}${processData.type}`);
  };

  const processUnitsAndCss = (parsVal: string) => {
    const processVal: string = parsVal;
    const type: string = processVal == "" ? "" : "px";
    const value: string = processVal === "" ? "auto" : processVal;
    return { type, value };
  };

  return (
    <div className="dimension-widget">
      <div className="dimension-widget__inner">
        <div className="default-widget">
          <span>{height}</span>
          <span>{width}</span>
          <PanelFields
            isAllowMinus={true}
            getFieldValue={getWidthValues}
            label="Width"
          />
          <PanelFields
            isAllowMinus={false}
            label="Height"
            getFieldValue={getHeightValues}
          />
          <PanelFields
            isAllowMinus={false}
            label="Max Width"
            getFieldValue={getHeightValues}
          />
          <PanelFields
            isAllowMinus={false}
            label="Min Height"
            getFieldValue={getMaxHeightValues}
          />
        </div>

        <p className="unit-title unit-title--active">Margin</p>
        <div className="default-widget default-widget--units">
          <PanelFields isAllowMinus={true} label="Top" />
          <PanelFields isAllowMinus={true} label="Right" />
          <PanelFields isAllowMinus={true} label="Left" />
          <PanelFields isAllowMinus={true} label="Bottom" />
        </div>

        <p className="unit-title">Padding</p>
        <div className="default-widget default-widget--units">
          <PanelFields isAllowMinus={false} label="Top" />
          <PanelFields isAllowMinus={false} label="Right" />
          <PanelFields isAllowMinus={false} label="Left" />
          <PanelFields isAllowMinus={false} label="Bottom" />
        </div>
      </div>
    </div>
  );
};

export default DimensionsWidget;
