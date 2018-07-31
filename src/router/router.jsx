/*
* @Author: lulu27753
* @Date:   2018-04-19 16:32:54
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-05-10 17:48:14
*/
import { getMenuData } from 'container/basic-layout/getMenuData';
import React from 'react';
import Dashboard from 'container/basic-layout';

function getFlatMenuData(menus) {
	let keys = {};
	menus.forEach((item) => {
		if (item.children) {
			keys[item.path] = { ...item };
			keys = { ...keys, ...getFlatMenuData(item.children) };
		} else {
			keys[item.path] = { ...item };
		}
	});
	return keys;
}
export const getRouterData = () => {
	const routerConfig = {
		'/': { component: {Dashboard} },
		'/dashboard': { component: {Dashboard} }, // 首页
		'/personalWorkStation': { }, // 个人工作台
		'/orgManaget': { }, // 组织管理
		'/staffManage': { }, // 员工管理

		'/staffManage/query': { }, // 员工管理
		'/staffManage/unusal': { }, // 异动管理
		'/staffManage/resign': { }, // 离司管理
		'/staffManage/batch': { }, // 批量处理

		'/systemManage/corInfo': { }, // 企业信息
		'/systemManage/function': { }, // 功能设置
		'/systemManage/authority': { }, // 权限设置

		'/listReport': { }, // 清单报表
		'/user': { component: () => <h1>business-tree</h1> },
	};

	// 从getMenuData获取name的值 或者 直接在路由数据中设置它的值
	const menuData = getFlatMenuData(getMenuData());
	const routerData = {};
	Object.keys(routerConfig).forEach((item) => {
		const menuItem = menuData[item.replace(/^\//, '')] || {};
		routerData[item] = {
			...routerConfig[item],
			name: routerConfig[item].name || menuItem.name,
			authority: routerConfig[item].authority || menuItem.authority,
		}
	})
	// // console.log('routerData', routerData);
	return routerData;
}
