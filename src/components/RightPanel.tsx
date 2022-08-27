import React from 'react';
import CommonPanel from "./panel-components/CommonPanel";

// import widgets
import DimensionsWidget from './panel-components/DimensionWidget';

const RightPanel = () => {

  const dimensionTitle: string = "Dimensions";

  return(
    <div className="right-panel">
      {/* dimension panel */}
      <CommonPanel title={dimensionTitle} childWidget={<DimensionsWidget/>} />
    </div>
  );
};

export default RightPanel;