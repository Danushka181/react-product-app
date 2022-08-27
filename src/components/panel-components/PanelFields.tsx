import * as React from "react";
interface Props {
  label: string;
}

const PanelField = ({ label }: Props) => {
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
  );
};

export default PanelField;
