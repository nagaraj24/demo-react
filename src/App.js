import Header from './Header';
import TodoList from './TodoList';
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <Header title="Todo List Application"/>
      <TodoList/>
       <Footer />
    </div>
  );
}

export default App;