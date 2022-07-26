import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configStore } from "./store/config";
//import "bootstrap/dist/css/bootstrap.css";
import "../src/mainapp/index.scss";
import App from "./mainapp/App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";

const store = configStore();

export default function Wrapper() {
  return (
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  );
}

ReactDOM.render(<Wrapper />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
