import React, { useState } from "react";
interface Props {
  title: string;
  childWidget?: React.ReactNode;
}

const CommonPanel = ({ title, childWidget }: Props) => {
  const [toggle, setToggle] = useState<boolean>(true);
  return (
    <div className="common-panel">
      <div className="common-panel__inner">
        <div
          className={`common-panel__header ${toggle ? `active` : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          <span>{title}</span>
          <div className="toggle-btn"></div>
        </div>
        <div className={`common-panel__body ${toggle ? `active` : ""}`}>
          {childWidget}
        </div>
      </div>
    </div>
  );
};

export default CommonPanel;
