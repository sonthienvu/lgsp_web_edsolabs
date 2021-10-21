import React from "react";
import ContentPage from "./ContentPage";
import ListButtonControl from "./ListButtonControl";

export default function UserPage(){
  return (
    <div className="contentPage">
      <ListButtonControl/>
      <ContentPage/>
    </div>
  )
}
