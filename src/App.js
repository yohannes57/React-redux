import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import IceCreamCon from "./components/IceCreamCon";
import HookCakeCon from "./components/HookCakeCon";
import BreadContainer from "./components/BreadContainer";
import NewCakeCon from "./components/NewCakeCon";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";
import VideoContainer from "./components/VideoContainer.js";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <hr />
        {/* <ItemContainer iceCream />
        <ItemContainer cake />
        <hr />
        {/* <HookCakeCon /> */}
        {/* <hr />
        <IceCreamCon />
        <hr />
        <BreadContainer />
        <hr />
        <NewCakeCon /> */}
        <UserContainer />
        <VideoContainer />
      </div>
    </Provider>
  );
}

export default App;
