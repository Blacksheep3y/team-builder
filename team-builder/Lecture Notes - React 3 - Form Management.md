[!][HELLO TODAY WE ARE TALKING ABOUT FORMS IN REACT / JSX]
[.][When reading this file remembering 'FORMS' from html] <Form> will help significantly.
* # There are 3 important HTML ELEMENTS when talking about Forms:
`(Checkout MDN for more about Forms)`
+ It is important to wrap your html content in the Form element because there is a lot of default behavior when using the Form element with browsers.
# 3 IMPORTANT HTML ELEMENTS
[1] - [Form]
[2] - [Input]
[3] - [Label]
* Some Background Info: (This is from the `index.js` file from class lecture)
- <Notes> = refers to the import file
- <Notes notes> = refers to the prop, we are naming it here (name can be whatever you want)
- <Notes notes={notesState} /> = refers to the value for our named prop 'notes'. 
* [Sidenote:] when using [.map()], map will render even an empty array (as long as it's an array it will work), can not just put a number in the `()` must have an array.
# When do you need to include a key on a JSX element?:
[.] Whenever we are mapping. 
[.] When we have like items. 
[.] When there are multiples of the same thing. 
[.] Anytime we itterate over a list of something. 
[**] React uses the `key` to differentiate the items from eachother, so when one thing changes it does not need to change all of them, it only needs to change that one item.
* `Form` comes with some built in functionality such as submitting when we press enter
* `Input` allows us to set a type of input such as checkbox, text, submit, etc.
* `Label` gives us an identification for our input. 
    - inside <label> instead of saying <label for> (as in reference to HTML) we must use <label htmlFor> because `JSX` already uses the keyword [for] within for loops. And thus, when using <label htmlFor> and setting a value for 'htmlFor' <label htmlFor='name-value-from-input'> we set this equal to the `name value` of our <input> tag.
    # ---------------------------------  Form Example -------------------------------------
    <form>
     <label htmlFor="title">Title:</label>
     <input type="text" name="title"/>
     <label htmlFor="body">Body:</label>
     <textarea type="text" name="body" placeholder="This is the body of the note."/>
     <button type="submit">Create ToDo!</button>
    </form>
    ---------------------------------------------------------------------------------------
    Just some side notes here about Forms:
    - You don't need the type of `text` for an <input> or `submit` for a <button> [][those are implied in a JSX form]. However adding them does make code more semantic (readable/understandable by readers).
    ---------------------------------------------------------------------------------------
* # Controlled Components
[*] Before our <form> was `Uncontrolled` meaning that react had no control over our inputs. `In a controlled component`, form data is handled by a React component, whereas `In an uncontrolled component`, form data is handled by the DOM itself. This can get really messy, to fix this we make our forms `Controlled`:
[.] value, onChange (these are the two things we need to make a 'Controlled' input)
# `Controlled Input` EXAMPLE: -------------------------------------------------------------
    import React, {useState} from "react";
    const NoteForm = props => {
        const [titleState, setTitleState] = useState("")
        const titleChange = (event) => {
            console.log("In Title change handler", event.target.value)
            setTitleState(event.target.value)
        }

        return (
            <form>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" value={titleState} onChange={titleChange} placeholder="This is the title of the note." />
            </form>
        );
    };

    export default NoteForm;
-------------------------------------------------------------------------------------------
[*] Next, we need to add this information we are creating into our actual sticky note "to-do" so we go back to our index.js and we create a `new const` in our function [App]. Then in our <NoteForm> within our `return()` we call our new const, by setting a prop inside Noteform equal to our const.

    const addNoteHandler = newNote => {
        console.log("adding note", newNote);
        setNotesState([...notesState, newNote]);
        //Update the state.
    };

    return (
        <div className="App">
        <h1>My Notes</h1>
        <NoteForm addNote={addNoteHandler} />
        <Notes notes={notesState} />
        </div>
    );
    }
-------------------------------------------------------------------------------------------
Reference Time Points: 
1:22:00
1:37:00
1:45:00