import Routes from '@routes/index'
import NormalizeGlobalStyle from '@/styles/normalize'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme'
import { Provider } from 'react-redux'
import store from './store'
import ModalExample from './components/Atoms/ModalExample'

const Modals = () => (
  <>
    <ModalExample>Modal de exemplo com redux</ModalExample>
  </>
)
const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <NormalizeGlobalStyle />
        <Routes />
        <Modals />
      </ThemeProvider>
    </Provider>
  )
}

export default App
