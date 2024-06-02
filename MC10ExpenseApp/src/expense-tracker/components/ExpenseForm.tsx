import categories from "../categories";


const ExpenseForm = () => {
  return (
    <>
        <form>
            <div className="col-2 mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input id="description" type="text" placeholder="" className="form-control" />
            </div>

            <div className="col-2 mb-3">
                <label htmlFor="amount" className="form-label">Amount</label>
                <input id="amount" type="number" placeholder="0.00" className="form-control" />
            </div>

            <div className="col-2 mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select name="category" id="category" className="form-select">
                    <option>Select a Category</option>
                    {categories.map(category => <option key={category} value={category} >{category}</option>)}
                </select>
            </div>
            <button className="btn btn-outline-primary mt-1">Submit</button>
        </form>
    </>
  )
}

export default ExpenseForm