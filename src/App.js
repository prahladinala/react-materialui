import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'

// CREATE CUSTOM THEME
const theme = createTheme({
  // https://material-ui.com/customization/default-theme/#default-theme
  palette: {
    primary: {
      main: '#FBA832'
    },
    // OR OTHER WAY > GET FONT COLORS FROM MATERIAL COLORS
    // https://material-ui.com/customization/color/#color
    // purple is an object of purple colors
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,

  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
