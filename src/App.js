import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./components/homepage/homePage";
import EditNotes from "./components/editNotes/editNotesPageContainer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/edit/:id?" render={() => <EditNotes />} />
        <Route path="/" exact render={() => <HomePage />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
