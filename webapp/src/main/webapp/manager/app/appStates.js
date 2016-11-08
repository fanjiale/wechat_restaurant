/**
 * 路由状态列表
 * @type
 */
var appStates = {
    'home':{
        abstract: true,
        url: '',
        template:'<div ui-view class="uiViewContain"></div>',
        label : ""
    },
    'home.dashboard': {
        url: '/dashboard',
        templateUrl:'app/home/dashboard.html',
        controller:'dashboardCtrl',
        label : "首页"
    },
    'system' : {
        url: "/system",
        views: {
            "": {
                templateUrl:'app/system/user-manager.html'
            },
            "chart@system": {
                template: "chart"
            },
            "data@system": {
                template: "data"
            }
        }
    }
};