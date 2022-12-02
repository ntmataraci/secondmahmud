import Game from "./components/Game";
import LanguageSelect from "./components/LanguageSelect";
import Menu from "./components/Menu";
import { useSelector,useDispatch } from "react-redux"

function App() {
const menuSit=useSelector((state)=>state.languageSlice.menuOpen)

  return (
    <div className="bg-slate-300 flex justify-center  min-w-screen min-h-screen">
      <LanguageSelect/>
      {menuSit?
       <Menu/>:
       <Game/>
      }
    </div>
  );
}

export default App;
