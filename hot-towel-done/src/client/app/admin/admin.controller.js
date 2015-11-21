(function () {
    'use strict';

    angular
        .module('app.admin')
        .controller('AdminController', AdminController);

    AdminController.$inject = ['logger', '$translatePartialLoader', '$translate'];
    /* @ngInject */
    function AdminController(logger, $translatePartialLoader, $translate) {
        var vm = this;
        vm.title = 'Admin';

        activate();

        function activate() {
            // logger.info('Activated Admin View');

            // $translatePartialLoader.addPart('admin');
            // var lang = window.localStorage.getItem('LANG');
            // console.log('Current locale is: ', lang);
            // $translate.use(); // returns the current language being used
            // $translate.refresh(lang);
            $translate('Activation_Admin').then(function (translation) {
                logger.info(translation);
             });
        }
    }
})();