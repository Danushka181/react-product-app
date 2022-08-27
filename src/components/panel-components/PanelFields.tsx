import React from "react";

import '../../assets/scss/components/panel-partials/input-wrapper.scss';
interface Props {
  label: string
}

export const PanelField = ({label} : Props) => {
  return (
    <div className="input-wrapper">
      <div className="input-wrapper__inner">
        <label htmlFor="">{label}</label>
        <div className="input-field">
          <input type="text" name="width" placeholder="auto" />
          <span className="up-arrow"></span>
          <span className="down-arrow"></span>
          <p className="value-indicator">px</p>
        </div>
      </div>    
    </div>
  )
}