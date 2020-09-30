import React, {useEffect, useState} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Table, Tag, Space, Button, InputNumber, Select, message, Input} from 'antd';

const {Option} = Select;

const App = () => {
    const [arrItems, setArrItems] = useState([]);
    const [key, setKey] = useState('');
    useEffect(()=>{
        fetch('https://sahpossum.herokuapp.com/items/getVkItems/all')
            .then(res=>res.json())
            .then(res=>{
                setArrItems(res)
            })
    }, []);

    const sendMessage = (text) => {
        message.info(text);
    };

    const addPrice = async(product) => {
        if (product.varPrice.length <3){
            const newArr = await arrItems.map(item=>{
                if (item._id === product._id){
                    const newItem = {...item};
                    newItem.varPrice.push({count: 0, price: 0});
                    return newItem
                }
                return item
            });
            setArrItems(newArr)
        } else {
            sendMessage('Нельзя добавлять больше 3 пунктов')
        }
    };

    const delPrice = async(product, index) => {
        if (product.varPrice.length !== 1){
            const newArr = await arrItems.map(item=>{
                if (item._id === product._id){
                    const newItem = {...item};
                    newItem.varPrice.splice(index, 1);
                    return newItem
                }
                return item
            });
            setArrItems(newArr)
        } else {
            sendMessage('Нельзя удалять последний элемент цены')
        }
    };

    const saveProd = async(product) => {
        product.key = key;
        changeProduct(product)
    };

    const changeCount = async(value, product, index) => {
        const newArr = await arrItems.map(item=>{
            if (item._id === product._id){
                const newItem = {...item};
                newItem.varPrice[index].count = value;
                return newItem
            }
            return item
        });
        setArrItems(newArr)
    };

    const changeCountLabel = async(value, product, index) => {
        const newArr = await arrItems.map(item=>{
            if (item._id === product._id){
                const newItem = {...item};
                newItem.varPrice[index].countLabel = value;
                return newItem
            }
            return item
        });
        setArrItems(newArr)
    };

    const changePrice = async(value, product, index) => {
        const newArr = await arrItems.map(item=>{
            if (item._id === product._id){
                const newItem = {...item};
                newItem.varPrice[index].price = value;
                return newItem
            }
            return item
        });
        setArrItems(newArr)
    };

    const changeIsTrading = async (product) => {
        const newArr = await arrItems.map(item=>{
            if (item._id === product._id){
                const newItem = {...item};
                newItem.isTrading = !product.isTrading;
                newItem.key = key;
                changeProduct(newItem)
                return newItem
            }
            return item
        });
        setArrItems(newArr)
        sendMessage('Готово.')
    };

    const changeProduct = (product) => {
        product.key = key;
        fetch('https://sahpossum.herokuapp.com/items/changeVkItem',{
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
            .then(res=>console.log('ok'))
    };

    const columns = [
        {
            title: 'Фото',
            dataIndex: 'thumb_photo',
            key: 'thumb_photo',
            render: thumb_photo => <img style={{width: 100, height: 100}} src={thumb_photo}/>,
        },
        {
            title: 'Название',
            dataIndex: 'title',
            key: 'title',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Зависимости',
            dataIndex: 'varPrice',
            key: 'varPrice',
            render: (varPrice, product) => {
                return (
                    varPrice.map((item, index)=>{
                        return (
                            <div key={index}>
                            <Tag color={'green'}>
                                <div>
                                    <InputNumber style={{margin: 5}} placeholder='Вес/Обьем' value={item.count} onChange={(value)=>changeCount(value, product, index)}/>
                                    <Select value={item.countLabel || null} onChange={(value)=>changeCountLabel(value, product, index)}>
                                        <Option value={'Гр.'}>Гр.</Option>
                                        <Option value={'Мл.'}>Мл.</Option>
                                        <Option value={'См.'}>См.</Option>
                                    </Select>
                                    <InputNumber style={{margin: 5}} placeholder='Цена' value={item.price} onChange={(value)=>changePrice(value, product, index)}/>
                                    <Select defaultValue={'руб.'}>
                                        <Option value={'руб.'}>руб.</Option>
                                    </Select>
                                    <Button onClick={()=> delPrice(product, index)} style={{margin: 5}} danger>Удалить</Button>
                                </div>
                                {
                                    index === varPrice.length-1 &&
                                        <div style={{display: 'flex', justifyContent: 'center'}}>
                                            <Button type="dashed" onClick={()=>addPrice(product)}>Добавить</Button>
                                            <Button type="dashed" onClick={()=>saveProd(product)}>Сохранить</Button>
                                        </div>
                                }
                            </Tag>
                            </div>
                        )
                    })
                )
            }
        },
        {
            title: 'Статус продажи',
            dataIndex: 'isTrading',
            key: 'isTrading',
            render: (isTrading, product) =>{
                return (
                    <Tag onClick={()=>changeIsTrading(product)} color={isTrading ? 'green' : 'red'} key={1}>
                        {isTrading ? 'Продается' : 'Снят с продажи'}
                    </Tag>
                )
            },
        }
    ];
  return (
    <div className="container">
        <Input value={key} onChange={event=>setKey(event.target.value)}/>
      <Table columns={columns} dataSource={arrItems} />
    </div>
  );
};

export default App;
