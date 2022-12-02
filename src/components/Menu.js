import { useSelector,useDispatch } from "react-redux"
import { changeLang,closeMenu } from "../store/slice"
const Menu=()=>{
 const language = useSelector((state) => state.languageSlice.data)
const dispatch=useDispatch()

const style="text-slate-700 border-2 border-solid border-white rounded-md text-center cursor-pointer hover:brightness-50"

    return(
        <div>
        <div className="flex gap-5 text-white font-bold cursor-pointer "><div onClick={()=>dispatch(changeLang("tr"))} className=" hover:brightness-50">Türkçe</div> <div onClick={()=>dispatch(changeLang("en"))}  className=" hover:brightness-50">English</div></div>
            {language&&
                <div className="flex flex-col gap-2">
            <div className={style} onClick={()=>dispatch(closeMenu())} >{language[0].sectionOne}</div>
            <div className={style}>{language[0].sectionTwo}</div>
            <div className={style}>{language[0].sectionThree}</div>
            </div>
}  
        </div>
    )
}

export default Menu