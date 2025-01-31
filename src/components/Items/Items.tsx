import { Button, Card, Flex } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../store/countSlice.tsx";

export const Items = (
// 	{
// 	// count,
// 	// handleCount,
// }:{
// // 	count: number;
// // handleCount: React.Dispatch<React.SetStateAction<number>>;
// }
) => {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.count)


	return (
		<Flex vertical gap={40} style={{ height: "100%" }}>
			<Flex gap={20} justify="center">
				{/*<Button onClick={() => handleCount((prev) => ++prev)}>Добавить</Button>*/}
				{/*<Button onClick={() => handleCount((prev) => --prev )}>Удалить</Button>*/}
				<Button onClick={() => dispatch(increment())}>Добавить</Button>
				<Button onClick={() => dispatch(decrement())}>Удалить</Button>
			</Flex>
			<Flex gap={20} wrap>
				{[...new Array(count)]?.map((_item, index) => {
					return <Card key={index}>{index}</Card>;
				})}
			</Flex>
		</Flex>
	);
};
