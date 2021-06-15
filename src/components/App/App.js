import "./App.scss";
import Header from "../header/header";
import { Route } from "react-router-dom";
import ApplicationsPage from "../applicationsPage/applicationsPage";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Route
        exact
        path="/"
        render={() => <ApplicationsPage></ApplicationsPage>}
      ></Route>
      <Route path="/book" render={() => <h1>База знаний</h1>}></Route>
      <Route path="/staff" render={() => <h1>Сотрудники</h1>}></Route>
      <Route path="/client" render={() => <h1>Клиенты</h1>}></Route>
      <Route path="/assets" render={() => <h1>Активы</h1>}></Route>
      <Route path="/settings" render={() => <h1>Настройки</h1>}></Route>
    </div>
  );
}

export default App;
