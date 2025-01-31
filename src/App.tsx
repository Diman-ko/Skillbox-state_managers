// import {useState} from "react";
import './App.css';
import { CustomLayout } from "./components/Layout/CustomLayout";
import {Provider} from "react-redux";
import store from "./store";

function App() {
	// const [count, setCount] = useState(5);
	// const [themeColor, setThemeColor] = useState('white');

	return(
		<Provider store={store}>
			<CustomLayout
				// count={count}
				// handleCount={setCount}
				// theme={themeColor}
				// handleTheme={setThemeColor}
			/>
		</Provider>
	)
}

export default App;







// import "./App.css";
// import { CustomLayout } from "./components/Layout/CustomLayout";
// import { Provider } from "react-redux";
// import store from "./store";
//
// function App() {
// 	return (
// 		<Provider store={store}>
// 			<CustomLayout />
// 		</Provider>
// 	);
// }
//
// export default App;
