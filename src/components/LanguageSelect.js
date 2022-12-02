import { useEffect} from "react"
import { useDispatch } from 'react-redux'
import { changeLang } from "../store/slice"
const LanguageSelect=()=>{

    const dispatch = useDispatch()

useEffect(()=>{
    if(window.localStorage.getItem("secondmahmudLang")){
        const languageLocal=window.localStorage.getItem("secondmahmudLang")
        if (languageLocal==="tr"){
       dispatch(changeLang("tr"))
        }else{
            dispatch(changeLang("en"))
        }
    }else{
      window.localStorage.setItem("secondmahmudLang","tr")
      dispatch(changeLang("tr"))
    }
},[])    



}

export default LanguageSelect