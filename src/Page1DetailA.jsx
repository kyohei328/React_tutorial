import React from "react";
import { useLocation, useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Page1DetailA = () => {
    const { state } = useLocation();
    console.log(state)

    const history = useHistory();

    const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  )
}

export default Page1DetailA;
