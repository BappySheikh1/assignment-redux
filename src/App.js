import { RouterProvider } from 'react-router-dom';
import { router } from './route/route';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="">
      <Provider store={store}>
      <RouterProvider router={router}/>
      </Provider>
    </div>
  );
}

export default App;
