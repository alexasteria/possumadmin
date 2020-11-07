import React, {useEffect, useState} from "react";
import {Table, Tag, Space, Button, InputNumber, Select, message, Input} from 'antd';
import Auth from "./Auth";
const {Option} = Select;
const Orders = ({user, setUser}) => {
    const [arrOrders, setArrOrders] = useState([]);
    const [key, setKey] = useState('');
    const changeStatus = async(value, product) => {
        const newArr = await arrOrders.map(item=>{
            if (item._id === product._id){
                const newItem = {...item};
                newItem.status = value;
                return newItem
            }
            return item
        });
        setArrOrders(newArr)
    };
    const changeTrack = async(track, product) => {
        console.log(track)
        const newArr = await arrOrders.map(item=>{
            if (item._id === product._id){
                const newItem = {...item};
                newItem.track = track;
                return newItem
            }
            return item
        });
        setArrOrders(newArr)
    }
    const saveProd = async(product) => {
        product.key = key;
        changeProduct(product)
    };
    const changeProduct = (product) => {
        product.key = key;
        fetch('https://saharnypossum.herokuapp.com/pay/orders',{
            method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(product) // body data type must match "Content-Type" header
        })
            .then(res=>res.json())
            .then(res=>res.error ? sendMessage(res.error) : sendMessage('Изменения сохранены'))
    };
    const sendMessage = (text) => {
        message.info(text);
    };
    useEffect(()=>{
        fetch('https://saharnypossum.herokuapp.com/pay/orders', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *client
            body: JSON.stringify({}) //
        })
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
                setArrOrders(res)
            })
    }, []);
    const columns = [
        {
            title: 'Пользователь',
            dataIndex: 'user',
            key: 'user',
            render: user => <a target="_blank" rel="noopener noreferrer" href={`http://vk.com/id${user}`}>{`http://vk.com/id${user}`}</a>,
        },
        {
            title: 'Номер заказа',
            dataIndex: 'num',
            key: 'num',
            render: num => num,
        },
        {
            title: 'Сумма',
            dataIndex: 'sum',
            key: 'sum',
            render: sum => sum,
        },
        {
            title: 'Детали',
            dataIndex: 'jsonParams',
            key: 'jsonParams',
            render: (jsonParams, order) =><div style={{maxWidth: 400}}>
                <pre>{JSON.stringify(jsonParams, "", 2)}</pre>
                <Button type="dashed" onClick={()=>saveProd(order)}>Сохранить</Button>
            </div>,
        },
        {
            title: 'Track-code',
            dataIndex: 'track',
            key: 'track',
            render: (track, order) =>(<Input value={track} placeholder={!track && "Не указан"} onChange={(event)=>changeTrack(event.target.value, order)}/>),
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
            render: (status, order) =>(<Select value={status || null} onChange={(value)=>changeStatus(value, order)}>
                <Option value={'В обработке'}>В обработке</Option>
                <Option value={'Оплачен'}>Оплачен</Option>
                <Option value={'Отправлен'}>Отправлен</Option>
                <Option value={'Отменен'}>Отменен</Option>
            </Select>),
        }
    ];
    if (!user) return <Auth setUser={setUser}/>
    return (
        <div className="container">
            <Input value={key} onChange={event=>setKey(event.target.value)} placeholder={'Вставьте в это поле ключ доступа. Без него изменения не будут применены.'}/>
            <Table columns={columns} dataSource={arrOrders} />
        </div>
    )
}
export default Orders