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
        templateUrl: 'app/home/dashboard.html',
        controller: 'dashboardController',
        label: "首页"
    },
    'system': {
        url: "/system",
        views: {
            "left": {
                templateUrl: 'app/system/menu.html'
            },
            "right": {
                templateUrl: 'app/system/content.html'
            }
        },
        label: "系统管理"
    },
    'system.user': {
        url: '/user',
        templateUrl: 'app/system/user-manager.html',
        controller: 'userManagerController',
        label: "用户管理"
    },
    'system.role': {
        url: '/role',
        templateUrl: 'app/system/role-manager.html',
        controller: 'roleManagerController',
        label: "角色管理"
    },
    'test': {
        url: "/test",
        views: {
            "": {
                templateUrl: 'app/system/user-manager.html'
            },
            "left@system": {
                templateUrl: 'app/system/menu.html'
            },
            "right@system": {
                templateUrl: 'app/system/content.html'
            }
        }
    }
};