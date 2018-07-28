// const menuData = [{
//   name: '首页',
//   icon: 'appstore-o',
//   path: 'dashboard',
//   children: [{
//     name: '个人中心',
//     path: 'user-group',
//   }],
//   }, {
//   name: 'NotFound',
//   icon: 'warning-circle',
//   path: 'notfound',
// }
// ];

const menuData = [{
    name: '首页',
    icon: 'appstore-o',
    path: 'dashboard',
  }, {
    name: '个人工作台',
    icon: 'platform',
    path: 'personalWorkStation',
  }, {
    name: '组织管理',
    icon: 'user-group',
    path: 'orgManaget',
  }, {
    name: '员工管理',
    icon: 'user',
    path: 'staffManage',
    children: [{
      name: '员工查询',
      path: 'query',
    }, {
      name: '异动管理',
      path: 'unusal',
    }, {
      name: '离司管理',
      path: 'resign',
    }, {
      name: '批量处理',
      path: 'batch',
    }]
  }, {
    name: '系统管理',
    icon: 'tool',
    path: 'systemManage',
    children: [{
      name: '企业信息',
      path: 'corInfo',
    }, {
      name: '功能设置',
      path: 'function',
    }, {
      name: '权限设置',
      path: 'authority',
    }]
  }, {
    name: '清单报表',
    icon: 'message',
    path: 'listReport',
  }
];
function formatter(data, parentPath = '', parentAuthority) {
  return data.map((item) => {
    const result = {
      ...item,
      path: `${parentPath}${item.path}`,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);




