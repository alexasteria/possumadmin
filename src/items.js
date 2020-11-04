import React, {useEffect, useState} from "react";
import {Table, Tag, Modal, Button, InputNumber, Select, message, Input, Form} from 'antd';
import TextArea from "antd/es/input/TextArea";
import Auth from "./Auth";

const {Option} = Select;
const Items = ({user, setUser}) => {
    const [arrItems, setArrItems] = useState([]);
    const [key, setKey] = useState('');
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();
    useEffect(()=>{
        fetch('https://saharnypossum.herokuapp.com/items/getVkItems/all')
            .then(res=>res.json())
            .then(res=>{
                setArrItems(res)
            })
    }, []);

    const sendMessage = (text) => {
        message.info(text);
    };
const saveNewPropd = () => {
    const v = form.getFieldsValue(["title", "description", "thumb_photo", "category", "group"]);
    v.id = Date.now();
    v.key = key;
    fetch('https://saharnypossum.herokuapp.com/items/newVkItem',{
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
        body: JSON.stringify(v) // body data type must match "Content-Type" header
    })
        .then(res=>res.json())
        .then(res=>{
            res.error ? sendMessage(res.error) : sendMessage('Изменения сохранены. Продукт появится последним в списке после перезагрузки страницы.');
            setVisible(!visible)
        })
}
    const changeAvailable = async (value, product, index) => {
        const newArr = await arrItems.map(item=>{
            if (item._id === product._id){
                const newItem = {...item};
                newItem.varPrice[index].available = value;
                return newItem
            }
            return item
        });
        setArrItems(newArr)
    };

    const changeCategory = async (value, product) => {
        const newArr = await arrItems.map(item=>{
            if (item._id === product._id){
                const newItem = {...item};
                newItem.category = value;
                return newItem
            }
            return item
        });
        setArrItems(newArr)
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

    const changeDescription = async(value, product)=> {
        const newArr = await arrItems.map(item=>{
            if (item._id === product._id){
                const newItem = {...item};
                newItem.description = value;
                return newItem
            }
            return item
        });
        setArrItems(newArr)
    }

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
        fetch('https://saharnypossum.herokuapp.com/items/changeVkItem',{
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

    const columns = [
        {
            title: 'Фото',
            dataIndex: 'thumb_photo',
            key: 'thumb_photo',
            render: (thumb_photo, product) => <><img style={{width: 100, height: 100}} src={thumb_photo}/><br/>
                <Tag onClick={()=>changeIsTrading(product)} color={product.isTrading ? 'green' : 'red'} key={1}>
                    {product.isTrading ? 'Продается' : 'Снят с продажи'}
                </Tag></>,
        },
        {
            title: 'Название',
            dataIndex: 'title',
            key: 'title',
            render: (text, product) => <><a>{text}</a><br/>
                <TextArea onChange={(e)=>changeDescription(e.target.value, product)} style={{width: 300, height: 100}} value={product.description}/></>,
        },
        {
            title: 'Категория',
            dataIndex: 'category',
            key: 'category',
            render: (category, product) =>
                <>
                    Категория - {product.group.name}<br/>
                    <Select label="Подкатегория" value={category || 'Выберите подкатегорию'} onChange={(value)=>changeCategory(value, product)}>
                        <Option value={'Консервы'}>Консервы</Option>
                        <Option value={'Корма/добавки для живых насекомых'}>Корма/добавки для живых насекомых</Option>
                        <Option value={'Наборы/смеси'}>Наборы/смеси</Option>
                        <Option value={'Сублимированные'}>Сублимированные</Option>
                        <Option value={'Насекомоядные,листоядные,приматы'}>Насекомоядные,листоядные,приматы</Option>
                        <Option value={'Рыбки и крабы'}>Рыбки и крабы</Option>
                        <Option value={'Витамины/лакомства'}>Витамины/лакомства</Option>
                        <Option value={'Корма/диеты'}>Корма/диеты</Option>
                        <Option value={'Птицы'}>Птицы</Option>
                        <Option value={'Средства ухода'}>Средства ухода</Option>
                        <Option value={'Прочее'}>Прочее</Option>
                    </Select>
                </>,
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
                                        Количество
                                        <InputNumber style={{margin: 5}} placeholder='Количество' value={item.available} onChange={(value)=>changeAvailable(value, product, index)}/>
                                        Фасовка
                                        <Input style={{margin: 5, width: 80}} placeholder='Вес/Обьем' value={item.count} onChange={(e)=>changeCount(e.target.value, product, index)}/>
                                        <Select value={item.countLabel || null} onChange={(value)=>changeCountLabel(value, product, index)}>
                                            <Option value={'Вес'}>Вес</Option>
                                            <Option value={'Объем'}>Объем</Option>
                                            <Option value={'Размер'}>Размер</Option>
                                            <Option value={'Вкус'}>Вкус</Option>
                                        </Select>
                                        <InputNumber style={{margin: 5}} placeholder='Цена' value={item.price} onChange={(value)=>changePrice(value, product, index)}/>
                                        <Select defaultValue={'руб.'}>
                                            <Option value={'руб.'}>руб.</Option>
                                        </Select>
                                        {
                                            item.active === true ?
                                                <Button onClick={()=> delPrice(product, index)} style={{margin: 5}} disabled danger>Удалить</Button> :
                                                <Button onClick={()=> delPrice(product, index)} style={{margin: 5}} danger>Удалить</Button>
                                        }
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
        }
    ];
    if (!user) return <Auth setUser={setUser}/>
    return (
        <div className="container" style={{overflowX: 'scroll'}}>
            <Modal
                title="Добавление товара"
                visible={visible}
                onOk={()=>setVisible(!visible)}
                onCancel={()=>setVisible(!visible)}
                footer={[]}
            >
                <Form
                    name="add"
                    onFinish={saveNewPropd}
                    onFinishFailed={()=>console.log(form)}
                    form={form}
                >
                    <Form.Item
                        label="Название"
                        name="title"
                        rules={[{ required: true, message: 'Пожалуйста, укажите название' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Описание"
                        name="description"
                        rules={[{ required: true, message: 'Пожалуйста, укажите описание' }]}
                    >
                        <TextArea />
                    </Form.Item>

                    <Form.Item
                        label="Ссылка на фото"
                        name="thumb_photo"
                        rules={[{ required: true, message: 'Пожалуйста, укажите описание' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item label="Группа"
                               name="group">
                        <Select>
                            <Option value={135}>Ежи</Option>
                            <Option value={136}>Рептилии</Option>
                            <Option value={134}>Насекомые</Option>
                            <Option value={137}>Сахарный поссум</Option>
                            <Option value={138}>Другие животные, птицы, рыбки</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Подкатегория"
                               name="category">
                        <Select>
                            <Option value={'Консервы'}>Консервы</Option>
                            <Option value={'Корма/добавки для живых насекомых'}>Корма/добавки для живых насекомых</Option>
                            <Option value={'Наборы/смеси'}>Наборы/смеси</Option>
                            <Option value={'Сублимированные'}>Сублимированные</Option>
                            <Option value={'Насекомоядные,листоядные,приматы'}>Насекомоядные,листоядные,приматы</Option>
                            <Option value={'Рыбки и крабы'}>Рыбки и крабы</Option>
                            <Option value={'Витамины/лакомства'}>Витамины/лакомства</Option>
                            <Option value={'Корма/диеты'}>Корма/диеты</Option>
                            <Option value={'Птицы'}>Птицы</Option>
                            <Option value={'Средства ухода'}>Средства ухода</Option>
                            <Option value={'Прочее'}>Прочее</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Добавить
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            <div style={{display: "flex"}}>
                <Button onClick={()=>setVisible(!visible)}>+Добавить товар</Button>
                <Input value={key} onChange={event=>setKey(event.target.value)} placeholder={'Вставьте в это поле ключ доступа. Без него изменения не будут применены.'}/>
            </div>
            <Table columns={columns} dataSource={arrItems} />
        </div>
    );
}

export default Items