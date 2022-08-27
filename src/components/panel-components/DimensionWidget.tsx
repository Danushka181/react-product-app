import React from "react";

import { PanelField } from "./PanelFields";

import '../../assets/scss/components/panel-partials/dimention-widget.scss';

const DimensionsWidget = () => {
  return (
    <div className="dimension-widget">
      <div className="dimension-widget__inner">

        <div className="default-widget">
          <PanelField label="Width"/>
          <PanelField label="Height"/>
          <PanelField label="Max Width"/>
          <PanelField label="Min Height"/>
        </div>

        <p className="unit-title unit-title--active">Margin</p>
        <div className="default-widget default-widget--units">
          <PanelField label="Top"/>
          <PanelField label="Right"/>
          <PanelField label="Left"/>
          <PanelField label="Bottom"/>
        </div>

        <p className="unit-title">Padding</p>
        <div className="default-widget default-widget--units">
          <PanelField label="Top"/>
          <PanelField label="Right"/>
          <PanelField label="Left"/>
          <PanelField label="Bottom"/>
        </div>

      </div>
    </div>
  )
}

export default DimensionsWidget;