import * as React from "react";
interface Props {
  label: string;
  isAllowMinus: boolean;
  getFieldValue: (val) => void;
}

const PanelFields = (props: Props) => {
  const { label, isAllowMinus, getFieldValue } = props;

  const [fieldValue, setFieldValue] = React.useState<number | string>(NaN);

  const setFieldOnTypeValues = (e) => {
    const currentValue: number = e.target.value;
    if (isAllowMinus) {
      if (currentValue >= 0 || currentValue == NaN) {
        setFieldValue(currentValue);
        getFieldValue(currentValue);
      }
    } else {
      setFieldValue(currentValue);
      getFieldValue(currentValue);
    }
  };

  return (
    <div className="input-wrapper">
      <div className="input-wrapper__inner">
        <label htmlFor="">{label}</label>
        <div className="input-field">
          <input
            type="number"
            name="width"
            value={fieldValue.toString()}
            placeholder="auto"
            onChange={setFieldOnTypeValues}
          />
          <span
            className="up-arrow"
            onClick={() => {
              if (isNaN(+fieldValue)) {
                setFieldValue(0);
                getFieldValue(0);
              } else {
                setFieldValue(+fieldValue + 1);
                getFieldValue(+fieldValue + 1);
              }
            }} // increment value
          ></span>
          <span
            className="down-arrow"
            onClick={() => {
              if (isAllowMinus) {
                if (+fieldValue - 1 > -1) {
                  setFieldValue(+fieldValue - 1);
                  getFieldValue(+fieldValue - 1);
                }
              } else {
                setFieldValue(+fieldValue - 1);
                getFieldValue(+fieldValue - 1);
              }
            }} // decrement values
          ></span>
          <p className="value-indicator">{fieldValue ? "px" : "-"}</p>
        </div>
      </div>
    </div>
  );
};

export default PanelFields;
