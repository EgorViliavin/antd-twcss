import { Alert, Button, Flex, List, Spin } from "antd";
import { Typography } from "antd";

import { observer } from "mobx-react-lite";
import todosStore from "./store/todos-store";
import { useEffect } from "react";
import counterStore from "./store/counter-store";
import Paragraph from "antd/es/skeleton/Paragraph";
const { Title } = Typography;

// const App = observer(() => {
//   const {
//     count,
//     increment,
//     decrement,
//     total,
//     savedCount,
//     saveCount,
//     removeCount,
//   } = counterStore;

//   useEffect(() => {
//     todosStore.getAllTodosRequest();
//   }, []);
//   const state = todosStore.todos?.state;
//   const todos = todosStore.getAllTodos();

//   console.log("Todos:", todos);

//   return (
//     <>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <Title>Результат: {count}</Title>
//         <Flex gap={20} justify="center" align="center">
//           <button onClick={() => increment(2)}>Inc</button>
//           <button onClick={() => decrement(4)}>Dec</button>
//         </Flex>

//         <Title>Сохраненное число: {savedCount}</Title>
//         <Button type="primary" block onClick={saveCount}>
//           Добавить число
//         </Button>
//         <Button danger type="dashed" variant="text" block onClick={removeCount}>
//           Удалить число
//         </Button>

//         <Title>Общий Результат: {total}</Title>
//       </div>
//       {state !== "pending" ? (
//         <List
//           bordered
//           dataSource={todos}
//           renderItem={(todo) => (
//             <List.Item>
//               <Typography.Text>
//                 {todo.title} - {todo.completed ? "Выполнено" : "В процессе "}
//               </Typography.Text>
//             </List.Item>
//           )}
//         />
//       ) : (
//         <Spin />
//       )}
//     </>

//   );
// });

function App() {
  return (
    <>
      <Flex gap={10}>
        {/* У кнопок единственная проблема с ховером, что тоже решаемо если
        использовать свой компонент */}
        <Button className="bg-attention-300 border-attention-800">
          Primary
        </Button>
        <Button className="bg-purple-300 border-purple-800">Primary</Button>
        <Button className="bg-gray-300 border-gray-800">Primary</Button>
        {/* Иконки можно настроить в своем компоненте */}
        <Alert
          className="bg-purple-300 border-purple-800 w-2/6"
          message="asd"
          showIcon
        />
      </Flex>
    </>
  );
}

export default App;
