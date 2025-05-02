import React, { useState } from 'react';
import data from './data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import CartList from './CartList';

function ProductList() {
    const [cartItems, setCartItems] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [fav, setFav] = useState([]);

    const handleAddToCart = (item, index) => {
        if (!cartItems.find(cartItem => cartItem.name === item.name)) {
            const itemWithIndex = { ...item, index };
            setCartItems([...cartItems, itemWithIndex]);
            setQuantities({ ...quantities, [index]: 1 });
        }
    };

    const handleIncrement = (index) => {
        setQuantities(prev => ({
            ...prev,
            [index]: (prev[index] || 1) + 1,
        }));
    };

    const handleDecrement = (index) => {
        setQuantities(prev => ({
            ...prev,
            [index]: prev[index] > 1 ? prev[index] - 1 : 1,
        }));
    };

    const handleRemove = (itemToBeRemove) => {
        setCartItems(cartItems.filter(item => item.name !== itemToBeRemove.name));
    };

    return (
        <div className="p-4 flex flex-col md:flex-row">
            <h2 className="font-bold text-xl md:absolute top-10 left-20">Desserts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-8 p-8">
                {data.map((item, index) => (
                    <div key={index} className='rounded shadow p-4 w-full sm:w-[320px] flex flex-col items-center text-center'>
                        <img
                            src={item.image.thumbnail}
                            alt={item.name}
                            className={`w-full h-[200px] object-cover rounded border-2 transition-all duration-300 ${cartItems.find(cartItem => cartItem.name === item.name) ? 'border-red-500' : 'border-transparent'}`}
                        />
                        <div className="flex flex-col items-center mt-4 space-y-2">
                            {cartItems.find(cartItem => cartItem.name === item.name) ? (
                                <div className='flex items-center space-x-4 bg-red-500 text-white rounded-full px-4 py-2 -mt-10'>
                                    <button onClick={() => handleDecrement(index)} className='px-2 font-bold hover:bg-white hover:text-red-500 rounded-full transition'>-</button>
                                    <span>{quantities[index]}</span>
                                    <button onClick={() => handleIncrement(index)} className='px-2 font-bold hover:bg-white hover:text-red-500 rounded-full transition'>+</button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => handleAddToCart(item, index)}
                                    className='px-4 py-2 w-full sm:w-[150px] border-2 -mt-10 shadow-lg bg-white text-black/70 rounded-full hover:bg-red-700 hover:text-white flex items-center justify-center gap-2'>
                                    <FontAwesomeIcon icon={faCartPlus} className="text-red-500" />
                                    Add to Cart
                                </button>
                            )}
                        </div>
                        <p className='mt-3 text-black/50'>{item.category}</p>
                        <p className="font-semibold">{item.name}</p>
                        <p className='text-red-500'>${item.price}</p>
                    </div>
                ))}
            </div>
            <CartList cartItems={cartItems} onRemove={handleRemove} setQuantities={setQuantities} quantities={quantities} />
        </div>
    );
}

export default ProductList;
