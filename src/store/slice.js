import { createSlice } from "@reduxjs/toolkit";
import { turkishLanguage } from "../data/turkish";
import { englishLanguage } from "../data/english";
const initialState = {
  lang: "",
  data: "",
  menuOpen: true,
  stats: { Adm: "", Peo: "", Mil: "", War: "" },
  scene: 1,
};

export const languageSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
      window.localStorage.setItem("secondmahmudLang", action.payload);
      if (action.payload === "tr") {
        state.data = turkishLanguage;
      } else {
        state.data = englishLanguage;
      }
    },
    closeMenu: (state) => {
      state.menuOpen = false;
    },
    updateStats: (state, action) => {
      state.stats.Adm = action.payload.Adm;
      state.stats.Peo = action.payload.Peo;
      state.stats.Mil = action.payload.Mil;
      state.stats.War = action.payload.War;
    },
    changeScene: (state, action) => {
      state.scene += action.payload;
    },
    effectStats: (state, action) => {
      if (action.payload.stat === "Adm") {
        state.stats.Adm += action.payload.point;
        if(state.stats.Adm>100){
            state.stats.Adm=100
        }
        if(state.stats.Adm<0){
            state.stats.Adm=0
        }
      }
      if (action.payload.stat === "Peo") {
        state.stats.Peo += action.payload.point;
        if(state.stats.Peo>100){
            state.stats.Peo=100
        }
        if(state.stats.Peo<0){
            state.stats.Peo=0
        }
      }
      if (action.payload.stat === "Mil") {
        state.stats.Mil += action.payload.point;
        if(state.stats.Mil>100){
            state.stats.Mil=100
        }
        if(state.stats.Mil<0){
            state.stats.Mil=0
        }
      }
      if (action.payload.stat === "War") {
        state.stats.War += action.payload.point;
        if(state.stats.War>100){
            state.stats.War=100
        }
        if(state.stats.War<0){
            state.stats.War=0
        }
      }
      console.log(action);
      window.localStorage.setItem("secondmahmudgame",JSON.stringify({Adm:state.stats.Adm,Peo:state.stats.Peo,Mil:state.stats.Mil,War:state.stats.War}))
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeLang, closeMenu, updateStats, changeScene, effectStats } =
  languageSlice.actions;

export default languageSlice.reducer;
