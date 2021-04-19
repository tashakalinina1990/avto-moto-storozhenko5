import React from 'react';
import PropTypes from 'prop-types';

import {TabsTypes} from '../mock/mocks';
import {withTabs} from '../hocs/with-tabs';

import Specifications from './specifications';
import Reviews from './reviews';
import Contacts from './contacts';

const Tabs = (props) => {
	const {onTabChange, currentTab, onTabKeydownChange} = props;
	return (
		<div className="tabs">
			<ul className="tabs__list">
				<li className={currentTab === TabsTypes.SPECIFICATIONS ? `tabs__item tabs__item--active` : `tabs__item`}
					onClick={(evt) => {
						onTabChange(TabsTypes.SPECIFICATIONS);
					}}
					onKeyDown={(evt) => {
						onTabKeydownChange(evt, TabsTypes.SPECIFICATIONS);
						}}
					tabIndex="0">
					Характеристики
				</li>
				<li className={currentTab === TabsTypes.REVIEWS ? `tabs__item tabs__item--active` : `tabs__item`}
					onClick={(evt) => {
						onTabChange(TabsTypes.REVIEWS);
					}}
					onKeyDown={(evt) => {
						onTabKeydownChange(evt, TabsTypes.REVIEWS);
						}}
					tabIndex="0">
					Отзывы
				</li>
				<li className={currentTab === TabsTypes.CONTACTS ? `tabs__item tabs__item--active` : `tabs__item`}
					onClick={(evt) => {
						onTabChange(TabsTypes.CONTACTS);
					}}
					onKeyDown={(evt) => {
						onTabKeydownChange(evt, TabsTypes.CONTACTS);
						}}
					tabIndex="0">
					Контакты
				</li>
			</ul>

			{currentTab === TabsTypes.SPECIFICATIONS && (
				<Specifications/>
			)}
			{currentTab === TabsTypes.REVIEWS && (
			 <Reviews />
			)}
			{currentTab === TabsTypes.CONTACTS && (
				<Contacts />
			)}

		</div>
	);
};

Tabs.propTypes = {
	onTabChange: PropTypes.func.isRequired,
	currentTab: PropTypes.string.isRequired,
};

export default withTabs(Tabs);
