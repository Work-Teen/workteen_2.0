'use strict'

import React from 'react'
import FontIcon from 'material-ui/FontIcon'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import Paper from 'material-ui/Paper'
import IconLocationOn from 'material-ui/svg-icons/communication/location-on'
import Feed from './feeds/feed.jsx'
import Home from './feeds/home.jsx'
import Map from './feeds/map.jsx'

import { Link } from 'react-router'

let Menu = React.createClass({
	getInitialState() {
		return {
			items: [{
				name: 'Home'
				id: 1
			},
			{
				name: 'Feed',
				id: 2
			},
			{
				name: 'Map',
				id: 3
			}]
		}
	},

	changeMenu(index) {
		let items = this.state.items;

		items.map(function(item){
			item.selected = false;
		});

		items[index].selected = true;

		this.setState({
			items: items
		});
	},

	menuChange() {
		console.log('Changed')
	},

	render() {
		return (
			<div className = "menu">
				<ul>
				  {
				  	this.state.items.map(function(item, index) {
				  		return (
				  			<li key={ item.id }>
				  				<Link to={ '/' + item.name } activeClassName="selected">{ item.name }</Link>
				  			</li>
				  			)
				  	}.bind(this))
				  }
				 </ul>
			</div>
        );
	}
});

module.exports = Menu;