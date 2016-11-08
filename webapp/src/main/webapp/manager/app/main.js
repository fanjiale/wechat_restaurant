diamond.run(
    ['$rootScope', '$state', '$stateParams', '$log', '$loggedHttp',
        function ($rootScope, $state, $stateParams, $log, $loggedHttp) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;



        }
    ]
);