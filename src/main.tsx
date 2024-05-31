import ReactDOM from 'react-dom/client'
import AppRouter from './routes/AppRouter.tsx'


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
