import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import './index.less'
import { menuConfig } from '../../resource/menuConfig'

export default class NavLeft extends Component {
  constructor(props) {
    super();
    this.state = {
      menuNodes: null
    }
  }
  componentDidMount() {
    const menuNodes = this.renderMenu(menuConfig);
    this.setState({
        menuNodes
    })
  }
  renderMenu = (data) => {
    return data.map(menu => {
        if(menu.children) {
            return (
                <Menu.SubMenu key={menu.key} title={menu.title}>
                  { this.renderMenu(menu.children) }
                </Menu.SubMenu>
            )
        }
        return <Menu.Item key={menu.key} title={menu.title}>{menu.title}</Menu.Item>
    })
  }
  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>Imooc MS</h1>
        </div>
        <Menu theme="dark">
        { this.state.menuNodes }
        </Menu>
      </div>
    )
  }
}
