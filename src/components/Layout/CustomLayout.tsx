import { Layout, Switch } from "antd";
import { contentStyle, footerStyle, headerStyle, layoutStyle } from "./styles";
import { Cart } from "../Cart/Cart";
import { Items } from "../Items/Items";
import {useDispatch, useSelector} from "react-redux";
import {toggleTheme} from "../../store/themeSlice.tsx";

const { Header, Footer, Content } = Layout;

export const CustomLayout = (
// {
// 	 // count,
//      // handleCount,
//      // theme,
//      // handleTheme
//      }: {
// 	// count: number;
// 	// handleCount: React.Dispatch<React.SetStateAction<number>>;
// 	// theme: string;
// 	// handleTheme: React.Dispatch<React.SetStateAction<string>>;
// }
) => {
	// const themeColor = useSelector((state) => state.theme.theme);
	const themeColor = useSelector((state) => state.theme);
	const count = useSelector((state) => state.count);
	const dispatch = useDispatch();
	// const themeColor = useSelector((state) => state.theme);
	// const count = useSelector((state) => state.count);
	// const dispatch = useDispatch();

	const handleSwitch = (e: boolean) => {
		// if (e) {
		// 	handleTheme("grey");
		// } else {
		// handleTheme("white");
		// }

		// dispatch(toggleTheme());

		if (e) {
			dispatch(toggleTheme("grey"));
		} else {
			// dispatch(toggleTheme("red"));
			dispatch(toggleTheme("white"));
		}

	};

	return (
		<Layout style={{ ...layoutStyle }}>
			<Header style={{ ...headerStyle, backgroundColor: themeColor }}>
				<Cart count={count} />
				<Switch onChange={handleSwitch} title="Поменять тему" />
			</Header>
			<Content style={contentStyle}>
				{/*<Items count={count} handleCount={handleCount}/>*/}
				<Items />
			</Content>
			<Footer style={footerStyle}>Footer</Footer>
		</Layout>
	);
};
