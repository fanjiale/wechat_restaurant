/**
 * 路由状态列表
 * @type
 */
var appStates = {
    'home': {
        abstract: true,
        url: '',
        template: '<div ui-view class="uiViewContain"></div>',
        label: ""
    },
    'home.dashboard': {
        url: '/dashboard',
        templateUrl: 'manager/app/home/dashboard.html',
        controller: 'dashboardController',
        label: "首页"
    },
    'system': {
        url: "/system",
        views: {
            "left": {
                templateUrl: 'manager/app/system/menu.html'
            },
            "right": {
                templateUrl: 'manager/app/system/content.html'
            }
        },
        label: "系统管理"
    },
    'system.user': {
        url: '/user',
        templateUrl: 'manager/app/system/user-manager.html',
        controller: 'userManagerController',
        label: "用户管理"
    },
    'system.role': {
        url: '/role',
        templateUrl: 'manager/app/system/role-manager.html',
        controller: 'roleManagerController',
        label: "角色管理"
    },
    'test': {
        url: "/test",
        views: {
            "": {
                templateUrl: 'manager/app/system/user-manager.html'
            },
            "left@system": {
                templateUrl: 'manager/app/system/menu.html'
            },
            "right@system": {
                templateUrl: 'manager/app/system/content.html'
            }
        }
    }
};