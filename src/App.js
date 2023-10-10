import { BrowserRouter, Link } from 'react-router-dom/cjs/react-router-dom.min';

import Router from "./router/Router.jsx";
import './App.css';
import ChildArea from './comments/ChildArea';
import { useState, useCallback } from 'react';
import InlineStyle from './comments/InlineStyle';
import CssModules from './comments/CssModules';
import StyledJsx from './comments/StyledJsx';
import StyledComponents from './comments/StyledComponents';
import Emotion from './comments/Emotion';


function App() {
  console.log("APP")
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value)
  const onClickOpen = () => setOpen(!open);

  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <BrowserRouter>
      <div className="App">
        <input value={text} onChange={onChangeText} />
        <br/>
        <br/>
        <button onClick={onClickOpen}>表示</button>
        <ChildArea open={open} onClickClose={onClickClose} />
        <InlineStyle />
        <CssModules />
        <StyledJsx />
        <StyledComponents />
        <Emotion />
        <Link to="/">Home</Link>
        <br/>
        <Link to="/page1">Page1</Link>
        <br/>
        <Link to="/page2">Page2</Link>
      </div>
      <Router/>
    </BrowserRouter>
  );
}

export default App;
