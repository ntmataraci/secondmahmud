import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateStats, changeScene, effectStats } from "../store/slice";
import Stats from "./Stats";
const Game = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.languageSlice.data);
  const scene = useSelector((state) => state.languageSlice.scene);
  const stats = useSelector((state) => state.languageSlice.stats);
  const dataFinder = data.find((item) => item.scene === scene);
  const [badEndGame, setBadEndGame] = useState(false);
  useEffect(() => {
    window.localStorage.setItem(
      "secondmahmudgame",
      JSON.stringify({ Adm: 55, Peo: 60, Mil: 60, War: 55 })
    );
    const statsAsObj = JSON.parse(
      window.localStorage.getItem("secondmahmudgame")
    );
    dispatch(updateStats(statsAsObj));
  }, []);

  const takeAction = (effect) => {
    effect.map((item) =>
      dispatch(effectStats({ stat: item.stat, point: item.point }))
    );
    dispatch(changeScene(1));
    if (stats.Adm < 50) {
      badEnd("Adm", stats.Adm);
    }
    if (stats.Peo < 50) {
      badEnd("Peo", stats.Peo);
    }
    if (stats.Mil < 50) {
      badEnd("Mil", stats.Adm);
    }
    if (stats.War < 50) {
      badEnd("War", stats.War);
    }
  };

  const badEnd = (name, limit) => {
    const rand = Math.floor(Math.random() * 100 + 1);
    const limitPoint = (100 - limit - 50) * 2.3 + 10;
    console.log(rand,limitPoint)
    if (rand > limitPoint) {
      return;
    } else {
      setBadEndGame(data.find((item) => item.badGame === name))
    }
  };

const [imgLoaded,setImgLoaded]=useState(false)

  return (
    <div className="flex flex-col max-w-[350px] lg:max-w-[600px]">
      {badEndGame ? (
       <div> {badEndGame.content}</div>
      ) : (
        <>
              <Stats />

          <img src={dataFinder.img} onLoad={()=>setImgLoaded(true)} className="lg:max-w-[300px] mx-auto" style={{visibility:imgLoaded?"visible":"hidden"}}/>
          <div className="animation-pulse" style={{visibility:imgLoaded?"hidden":"visible"}}>Loading...</div>

          <div className="text-slate-600 font-bold">{dataFinder.header}</div>
          <div className="text-slate-600 leading-7">{dataFinder.entrance}</div>
          <div className="flex flex-col gap-2"  >
            {dataFinder.choices.map((item, idx) => (
              <div key={idx} onClick={() => takeAction(item.effect)} className="border-2 border-solid cursor-pointer text-slate-700 font-bold">
                {item.content}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Game;
