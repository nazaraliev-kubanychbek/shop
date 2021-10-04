import React from 'react';

const Cart = ({cart, setCart}) => {
    const deleteProductFromCart = (id) => {
        const idx = cart.findIndex((item)=> item.id === id);
        if (cart[idx].count > 1){
            cart[idx].count--;
            setCart([...cart])
        }else {
           setCart(cart = cart.filter((item)=>{
                return item.id !== id
            }))
        }
    };
    return (
        <div className='container'>
            <h2>Корзина</h2>
            {cart.length === 0
                ? <div style={{'textAlign':'center'}}>
                    <h3>Ваша корзина пуста</h3>
                    <img src="https://lh3.googleusercontent.com/proxy/mX5_IKu_wL5l5ajRDZrfSRhjuiVX7YRZPQOxPotMJD4W0ZlwDnVj7nQDPjxXtk7GR2-YL8bAA5THCJYad5c" alt=""/>
                </div>
                :<>
                    <table>
                        <thead>
                        <tr>
                            <th>Назавание</th>
                            <th>Количество</th>
                            <th>Цена</th>
                            <th>Действие</th>
                        </tr>
                        </thead>

                        <tbody>
                        {cart.map((item, idx) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.count}</td>
                                    <td>{(item.price * item.count).toFixed(2)} $</td>
                                    <td>
                                        <button className='btn' type='button'
                                                onClick={() => deleteProductFromCart(item.id)}>Удалить
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>

                    </table>
                    <p>
                        Общая стоимость: {(cart.reduce((acc, rec) => acc + rec.price * rec.count, 0)).toFixed(2)} $
                    </p>
                </>
            }

        </div>
    );
};

export default Cart;