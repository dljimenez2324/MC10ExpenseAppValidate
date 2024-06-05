import categories from "../categories";
import { zodResolver } from "@hookform/resolvers/zod";
import { nanoid } from "nanoid";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";



// in order to use zod we need to make our schema
const schema = z
.object({
    // note that id was   id: z.number(),    before change to nanoid
    id: z.string().nanoid(),
    description: z.string(),
    amount: z.number(),
    category: z.string()
})

// lets create a type alias that represents the shape of the data defined by our schema above so that we check for type when we get or form data
type FormData = z.infer<typeof schema>

const ExpenseForm = () => {

    // in order to validate our form data on submit we need the following
    const {register, handleSubmit, formState:{errors}} = useForm<FormData>({resolver:zodResolver(schema)});

    console.log("These are your errors: ", errors);

    // make a helper function to show the Field Values after a submission to know how the data looks
    const onHelpSubmit = (data:FieldValues) => {
        
        // make a new ID when the form is submitted using nanoID which is faster than UUID and more secure than using a random number generator as well as being unique
        const newID = nanoid();
        // now we need to 
        console.log(data);
    };


   

  return (
    <>
        <form onSubmit={handleSubmit(onHelpSubmit)}>
            <div className="col-3 mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input {...register('description')} id="description" type="text" placeholder="" className="form-control" />
            </div>

            <div className="col-3 mb-3">
                <label htmlFor="amount" className="form-label">Amount</label>
                <input {...register('amount', {valueAsNumber: true})} id="amount" type="number" placeholder="0" className="form-control" />
            </div>

            <div className="col-3 mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select {...register('category')} id="category" name="category" className="form-select">
                    <option>Select a Category</option>
                    {/* this map makes the options show in the select cagetory field  notice the callback function */}
                    {categories.map(category => <option key={category} value={category} >{category}</option>)}
                </select>
            </div>
            {/* <button className="btn btn-outline-primary mt-1" onClick={incrementID}>Submit</button> */}
            <button className="btn btn-outline-primary mt-1" type="submit">Submit</button>
        </form>
    </>
  );
};

export default ExpenseForm