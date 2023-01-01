import React from "react";
import record from "./db.json";
const Home = () => {
  
  return (
    <>
      <div
        style={{
          border: "2px solid black",
          width: "50%",
          height: "50vh",
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            border: "1px solid black",
          }}
        >
          <p >Time</p>
          {record.map((value) => {
            return <p>{value.name}</p>;
          })}
        </div>
        {/* display time  */}
       {record.map((val)=>
       {
        if(val.name==="Air Temperature")
        {
          return val.data.map((temp)=>
            {
              return <p>{temp.time}</p>
            })
        }
       })}
     
      </div>
      {/* Air Temprature  */}
      <div style={{ position: "relative", left: "37%",bottom:"435px"}}> {  
         record.map((val,index) => { 
          
          if(val.name==="Air Temperature")
          {
            return val.data.map((temp)=>
            {
              return <p>{temp.value}</p>
            })
          }
        })}
      </div>
      {/* Relative Humidity */}
      <div style={{ position: "relative", left:"50%",bottom:"600px" }}> {  
         record.map((val,index) => { 
          
          if(val.name==="Relative Humidity")
          {
            return val.data.map((temp)=>
            {
              return <p>{temp.value}</p>
            })
          }
        })}
      </div>
      {/* Wind Speed */}
      <div style={{ position: "relative", left:"60%",bottom:"780px" }}> {  
         record.map((val,index) => { 
          
          if(val.name==="Wind Speed")
          {
            return val.data.map((temp)=>
            {
              return <p>{temp.value}</p>
            })
          }
        })}
      </div>
      {/* Wind Direction' */}
      <div style={{ position: "relative", left:"70%",bottom:"950px" }}> {  
         record.map((val,index) => { 
          
          if(val.name==="Wind Direction")
          {
            return val.data.map((temp)=>
            {
              return <p>{temp.value}</p>
            })
          }
        })}
      </div>
     
    </>
  );
};

export default Home;




  