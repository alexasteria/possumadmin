import React, {useState} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Button, Tabs} from "antd";
import Items from "./items";
import Orders from "./orders";
import OrdersOld from "./ordersOld"
import CatItems from "./categories/cat_items"
const { TabPane } = Tabs;

const App = () => {
    const [tab, setTab] = useState('items')
    const [tabItems, setTabItems] = useState('hedgehogs')
    const changeTab = (key) => {
        setTab(key)
    }
    const changeItemsTab = (key) => {
        setTabItems(key)
    }
return (
    <div style={{padding: 10}}>
        <Tabs defaultActiveKey={tab} onChange={changeTab}>
            <TabPane tab="Товары" key="items">
                <Tabs defaultActiveKey={tabItems} onChange={changeItemsTab}>
                    <TabPane tab="Все товары" key="all">
                        <Items />
                    </TabPane>
                    <TabPane tab="Ежи" key="hedgehogs">
                        <CatItems group={135}/>
                    </TabPane>
                    <TabPane tab="Рептилии" key="reptiles">
                        <CatItems group={136}/>
                    </TabPane>
                    <TabPane tab="Насекомые" key="insects">
                        <CatItems group={134}/>
                    </TabPane>
                    <TabPane tab="Сахарный поссум" key="possum">
                        <CatItems group={137}/>
                    </TabPane>
                    <TabPane tab="Другие" key="other">
                        <CatItems group={138}/>
                    </TabPane>
                </Tabs>
            </TabPane>
            <TabPane tab="Заказы (новые)" key="orders">
                <Orders />
            </TabPane>
            <TabPane tab="Заказы (отправленные)" key="orders_old">
                <OrdersOld />
            </TabPane>
        </Tabs>
    </div>
)
};

export default App;
