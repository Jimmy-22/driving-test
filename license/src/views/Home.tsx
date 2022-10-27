import React, { FC } from "react";
import Header from "../components/Header"

const Home: FC = () => {
  return (
    <div className="wrapper">
      <Header 
        headerTitle="驾照题库" 
        iconShow={false} 
      />
    </div>
  )
}

export default Home