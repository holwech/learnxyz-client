import React from 'react';
import { Link  } from 'react-router';

import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import MainSidebar from './MainSidebar';

export default class Main extends React.Component {
	render() {
		return (
			<div>
				<TopNav />	
				<div class='row'>
					<MainSidebar />					
					<div class='col-2 empty'></div>
					{this.props.children}
				</div>
				<div class="row">
					<Footer class={'footer'}/>	
				</div>
			</div>
		);	
	}	
} 

