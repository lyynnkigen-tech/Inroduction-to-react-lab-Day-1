import { format } from "date-fns"

function App() {
 
  return (
    <>
      <p>{format(new Date(), "PPpp")}</p>
    </>
  )
}

export default App
