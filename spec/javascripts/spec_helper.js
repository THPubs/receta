// require support/bind-poly
// require application
// require angular-mocks/angular-mocks

beforeEach(function() {
    return jasmine.addMatchers({
        toEqualData: function(util, customEqualityTesters) {
            return {
                compare: function(actual, expected) {
                    var result;
                    result = {};
                    result.pass = angular.equals(actual, expected);
                    return result;
                }
            };
        }
    });
});
