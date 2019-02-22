import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import { getBrand } from '../../store/Home/active.js';

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
        this.props.getBrand();
    }


    onOpenChange = (...args) => {
        this.setState({ open: !this.state.open });
    }

    render(){
        const brandData = this.props.homeData.brandData || {};
        const channelList = brandData['Channel'] || [];
        
        return (
            <div id="index">
                <header >
                    <NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>Basic</NavBar>
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
        homeData: state.homeData
    }),{
        getBrand
    }
)(Home);