import Form from "./components/forms/newRecipe";
import { BrowserRouter } from "react-router-dom";
import { Routes,Route } from "react-router-dom";
import Update from './components/pages/update'
import Edit from './components/pages/edit'
import NotFound from "./components/pages/notFound";
import RecipeList from "./components/pages/productList";
function App() {
  return (
    <div className=' bg-slate-400 w-full' >
      <BrowserRouter>
      <Routes>
          <Route index element={<Form />} />
          <Route path="/update" element={<Update />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/productList" element={<RecipeList/>}/>
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
