import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function todoList() {
    const [task, setTask] = useState('');
    const [data, setData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editedTask, setEditedTask] = useState([]);
    const [favrouitTask, setFavrouitTask] = useState([]);

    const addTask = (e) => {
        e.preventDefault();

        if (editIndex !== null) {
            const newData = [...data];
            newData[editIndex] = task;
            setData(newData);
            setEditedTask([...editedTask, newData[editIndex]]);
            setEditIndex(null);
        } else {
            setData([...data, task]);
        }

        setTask('');
    };

    const handleDelete = (index) => {
        const deleted = data[index];
        setData(data.filter((_, i) => i !== index));
        setEditedTask(editedTask.filter((item) => item !== deleted));

    };

    const handleEdit = (index) => {
        setTask(data[index]);
        setEditIndex(index);
    };

    const handleFavro = (item) => {
        if (favrouitTask.includes(item)) {
            setFavrouitTask(favrouitTask.filter(task => task !== item));
        } else {
            setFavrouitTask([...favrouitTask, item]);
        }
    };


    return (
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6 text-purple-700">TODO LIST</h1>

            <div className="flex gap-2 mb-6 w-full max-w-md">
                <input
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    type="text"
                    placeholder="Enter task"
                    className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <button
                    onClick={addTask}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
                >
                    {editIndex !== null ? 'Update' : 'Add'}
                </button>
            </div>

            <ul className="w-full max-w-md space-y-2">
                {data.map((item, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center bg-white shadow-sm px-4 py-2 rounded-lg"
                    >
                        {item}
                        <div className="flex gap-2">
                            <button
                                onClick={() => handleDelete(index)}
                                className="bg-red-500 text-white px-3 py-1 text-sm rounded hover:bg-red-600"
                            >
                                Delete
                            </button>
                            <button
                                onClick={() => handleEdit(index)}
                                className="bg-blue-500 text-white px-3 py-1 text-sm rounded hover:bg-blue-600"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleFavro(item)}
                                className="bg-green-500 text-white px-3 py-1 text-sm rounded hover:bg-green-600">
                                <FontAwesomeIcon icon={faHeart} className={`hover:text-red-700 ${favrouitTask.includes(item) ? 'text-red-700' : 'text-white'}`} />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="w-full max-w-md mt-10 bg-white rounded-lg shadow-md p-4">
                <h1 className="text-lg font-semibold text-gray-700 mb-3">Edited History</h1>
                <ul className="list-disc pl-5 text-gray-600">
                    {editedTask.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            
        </div>
    );
}

export default todoList;
