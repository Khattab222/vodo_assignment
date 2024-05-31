import ReactDOM from 'react-dom/client'
import AppRouter from './routes/AppRouter.tsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
  <Provider store={store}>

    <AppRouter />
  </Provider>
  </>,
)
