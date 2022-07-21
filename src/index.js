import { registerRootComponent } from "expo";
import app from "./App";
registerRootComponent (App)

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <app />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);