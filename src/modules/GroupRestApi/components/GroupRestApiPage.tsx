import React from "react";
import ContentPage from "./ContentPage";
import ListButtonControl from "./ListButtonControl";


export default function GroupRestApiPage(){
  return(
    <div className="contentPage">
      <ListButtonControl/>
      <ContentPage/>
    </div>
  )
}
