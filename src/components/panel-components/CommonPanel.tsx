import * as React from "react";
interface CommonPanelProps {
  title: string;
  childWidget?: React.ReactNode;
}

const CommonPanel = ({ title, childWidget }: CommonPanelProps) => {
  return (
    <div className="common-panel">
      <div className="common-panel__inner">
        <div className="common-panel__header">
          <span>{title}</span>
        </div>
        <div className="common-panel__body">{childWidget}</div>
      </div>
    </div>
  );
};

export default CommonPanel;
