import { shallow } from 'enzyme';
import React from 'react';
import NotificationItem from './NotificationItem';


describe('<NotificationItem />', () => {
	it('Tests that NotificationItem renders without crashing', () => {
		const wrapper = shallow(<NotificationItem />);
		expect(wrapper.exists()).toBe(true);
	})