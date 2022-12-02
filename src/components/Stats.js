import React from "react";
import { useSelector, useDispatch } from "react-redux";
const Stats = () => {
  const data = useSelector((state) => state.languageSlice.data)[0];
  const stats = useSelector((state) => state.languageSlice.stats);
  console.log(stats);

const style=(value)=>{
    return(
        <div className="flex h-[30px] border-2 border-solid border-slate-400 w-[150px] relative">
        <div className=" bg-green-300" style={{width:value+"%",backgroundColor:value<50?"red":""}}></div>
        <div className=" bg-yellow-300" style={{width:100-value+"%"}}></div>
        <div className="absolute top-0" style={{left:value+"%"}}>{value}</div>
        </div>
    )
}

const arrStats=[stats.Adm,stats.Peo,stats.Mil,stats.War]

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-2">
        {data && data.stats.map((item, idx) => <div className="h-[30px] text-sm" key={idx}>{item}</div>)}
      </div>
      <div className="flex flex-col gap-2">
    {arrStats.map((value,idx)=>
    <React.Fragment key={idx}>
        {style(value)}
        </React.Fragment>
        )}
      </div>
      <div className="flex flex-col text-sm">
        </div>
    </div>
  );
};

export default Stats;
