// remember to add Zod and react hook forms to ExpenseForm

import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter"
import ExpenseForm from "./expense-tracker/components/ExpenseForm"
import { nanoid } from "nanoid";

const App = () => {

      // useStates created to hold our dummy data Expense Array and selected cagetory from the form select and filter
      const [selectedCategory, setSelectedCategory] = useState('');
      
      const [dummyExpensesArray, setDummyExpensesArray] = useState([
        {id: 1, description: 'aaa', amount: 10, category: 'Utilities'},
        {id: 2, description: 'bbb', amount: 15, category: 'Entertainment'},
        {id: 3, description: 'ccc', amount: 20, category: 'Food'},
        {id: 4, description: 'ddd', amount: 25, category: 'Shopping'},
        {id: 5, description: 'eee', amount: 30, category: 'Groceries'}
      ])

      // lets make a variable with a ternary operator   we will then use our selectedCategory as a boolean like filter through our dummyExpenseArray
      const visibleExpense = selectedCategory ? dummyExpensesArray.filter(e=>e.category === selectedCategory) : dummyExpensesArray;


      // delete function
      const handleDelete = (id:number) => {
        // remember that filter will return everything else that is not the id that we pass through
        setDummyExpensesArray(dummyExpensesArray.filter(expense => expense.id !== id ))
      }

  return (
    <>
      <div className="container my-4">

        <h1 className="text-center">Expense App</h1>
        {/* Expense Form here and notice instead of using nanoid() which is in the ExpenseForm.tsx im going to add one to the current array and use that as the ID number */}
        <div className="m-4"><ExpenseForm onHelpSubmit={expense => setDummyExpensesArray([...dummyExpensesArray, {...expense, id: dummyExpensesArray.length + 1}])} /></div>
        {/* Expense Table filter option */}
        <div className="m-3 ms-4"><ExpenseFilter onSelectedCategory={category => setSelectedCategory(category)}/></div>
        <h2 className="text-center">Expense Table</h2>
        {/* table of data */}
        <div className="m-4"><ExpenseList expenses={visibleExpense} onDelete={handleDelete}/></div>
      </div>
    </>
  )
}

export default App