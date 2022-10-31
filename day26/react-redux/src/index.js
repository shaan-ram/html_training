import { createRoot } from "react-dom/client"
import { App } from "./app"
import { Provider } from "react-redux"
import { store } from "./redux/store"

createRoot(document.getElementById("root"))
.render(<Provider store ={store}><App/></Provider>)