import React from "react";
import { Button } from "@material-ui/core";
import "./CustomButton.css";

const CustomButton = ({ text, icon }) => {
  return (
    <Button
      className="custom_btn"
      endIcon={icon ? <div className="custom_btn_icon">{icon}</div> : null}
    >
      <span className="btn_text">{text}</span>
    </Button>
  );
};
export default CustomButton;
