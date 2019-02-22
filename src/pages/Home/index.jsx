import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Drawer, List, NavBar, Icon, Accordion } from 'antd-mobile';
/* import { getBrand } from '../../store/Home/active.js'; */

import './index.scss';


class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            open: true,
          }
    }

    componentWillMount(){
        document.title = '首页';
    }

    componentDidMount(){
        //this.props.getBrand();
    }


    onOpenChange = (...args) => {
        this.setState({ open: !this.state.open });
    }

    render(){
        /* const brandData = this.props.homeData.brandData || {};
        const channelList = brandData['Channel'] || []; */
        // fix in codepen
        const sidebar = (<Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
            <Accordion.Panel header="Title 1">
                <List className="my-list">
                    <List.Item>content 1</List.Item>
                    <List.Item>content 2</List.Item>
                    <List.Item>content 3</List.Item>
                </List>
            </Accordion.Panel>
            <Accordion.Panel header="Title 2" className="pad">
                <List className="my-list">
                    <List.Item>content 1</List.Item>
                    <List.Item>content 2</List.Item>
                    <List.Item>content 3</List.Item>
                </List>
            </Accordion.Panel>
            <Accordion.Panel header="Title 3" className="pad">
                <List className="my-list">
                    <List.Item>content 1</List.Item>
                    <List.Item>content 2</List.Item>
                    <List.Item>content 3</List.Item>
                </List>
            </Accordion.Panel>
        </Accordion>);
        return (
            <div id="index">
                <header >
                    <NavBar 
                        icon={<Icon type="ellipsis" />} 
                        onLeftClick={this.onOpenChange}
                        rightContent={[
                            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                          ]}
                        >Basic</NavBar>
                    <Drawer
                        className="my-drawer"
                        style={{ minHeight: document.documentElement.clientHeight }}
                        enableDragHandle
                        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
                        sidebar={sidebar}
                        open={this.state.open}
                        onOpenChange={this.onOpenChange}
                    >
                        Click upper-left corner
                    </Drawer>
                </header>
                <section>
                </section>
                <footer>
                </footer>
            </div>
        )
    }
}

export default connect(
    state =>({ 
    })
)(Home);