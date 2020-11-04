import React, {useState} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Tabs} from "antd";
import Items from "./items";
import Orders from "./orders";
import OrdersOld from "./ordersOld"
import CatItems from "./categories/cat_items"
import Auth from "./Auth";
const { TabPane } = Tabs;
const App = () => {
    const [tab, setTab] = useState('items')
    const [user, setUser] = useState(false)
    const [tabItems, setTabItems] = useState('hedgehogs')
    const changeTab = (key) => {
        setTab(key)
    }
    const changeItemsTab = (key) => {
        setTabItems(key)
    }
    const changeUser = (value) => {
        console.log(value)
        setUser(value)
    }
    console.log(user)
    if (!user) return <Auth setUser={changeUser}/>
return (
    <div style={{padding: 10}}>
        <Tabs defaultActiveKey={tab} onChange={changeTab}>
            <TabPane tab="Товары" key="items">
                <Tabs defaultActiveKey={tabItems} onChange={changeItemsTab}>
                    <TabPane tab="Все товары" key="all">
                        <Items user={user} setUser={changeUser}/>
                    </TabPane>
                    <TabPane tab="Ежи" key="hedgehogs">
                        <CatItems user={user} group={135} setUser={changeUser}/>
                    </TabPane>
                    <TabPane tab="Рептилии" key="reptiles">
                        <CatItems user={user} group={136} setUser={changeUser}/>
                    </TabPane>
                    <TabPane tab="Насекомые" key="insects">
                        <CatItems user={user} group={134} setUser={changeUser}/>
                    </TabPane>
                    <TabPane tab="Сахарный поссум" key="possum">
                        <CatItems user={user} group={137} setUser={changeUser}/>
                    </TabPane>
                    <TabPane tab="Другие" key="other">
                        <CatItems user={user} group={138} setUser={changeUser}/>
                    </TabPane>
                </Tabs>
            </TabPane>
            <TabPane tab="Заказы (новые)" key="orders">
                <Orders user={user} setUser={changeUser}/>
            </TabPane>
            <TabPane tab="Заказы (отправленные)" key="orders_old">
                <OrdersOld user={user} setUser={changeUser}/>
            </TabPane>
        </Tabs>
    </div>
)
};

export default App;
