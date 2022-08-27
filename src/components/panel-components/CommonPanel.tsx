import React from "react";

import '../../assets/scss/components/panel-partials/common-panel.scss';

interface CommonPanelProps {
  title: string;
  childWidget?: React.ReactNode
}

const CommonPanel = ({title, childWidget}:CommonPanelProps) => {
  return (
    <div className="common-panel">
      <div className="common-panel__inner">
        <div className="common-panel__header">
          <span>{ title }</span>
        </div>
        <div className="common-panel__body">
          {childWidget}
        </div>
      </div>
    </div>
  )
}

export default CommonPanel;