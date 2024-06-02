// remember to add Zod and react hook forms to ExpenseForm

import ExpenseForm from "./expense-tracker/components/ExpenseForm"

const App = () => {
  return (
    <>
        <h1 className="text-center">Expense App</h1>

        {/* Expense Form here */}
        <div className="m-5"><ExpenseForm/></div>
    </>
  )
}

export default App