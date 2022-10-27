import React, { FC, useCallback } from "react";
import Header from "../components/Header";

const Result: FC = () => {
  return (
    <div className="wrapper">
      <Header 
        headerTitle="考试结果" 
        iconShow={ true } 
      />
    </div>
  )
}

export default Result