import React from 'react';

function Search({ dev, setDev }) {
    return (
        <form className="flex justify-center items-center gap-2 p-4">
            <input
                type="text"
                placeholder="Enter position..."
                value={dev}
                onChange={(e) => setDev(e.target.value)}
                className="px-4 py-2 border rounded w-64 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
        </form>
    );
}

export default Search;
