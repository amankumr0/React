import { useState } from "react";
import useTodos from "../Context/TodoContext";

const InputBox = () => {
    const { addTodo } = useTodos();
    const [value, setValue] = useState("");
    const submitHandler = (e) => {
        e.preventDefault()
        addTodo({ value })
        setValue("");
    }
    return (
        <div className="w-full h-auto flex justify-center items-center">
            <form className="w-1/2" onSubmit={submitHandler}>
                <input
                    type="text"
                    className=" rounded-l-lg outline-none text-white focus:outline-none text-1xl p-3 dark:bg-gray-600 "
                    onChange={(e) => { setValue(e.target.value) }}
                    value={value}
                    placeholder="Add Your Task here"
                />
                <input
                    className=" rounded-r-lg bg-gray-700 text-1xl text-white p-3 outline-none cursor-pointer "
                    type="submit"
                    value="ADD"
                />
            </form>
        </div>
    );
}

export default InputBox;
