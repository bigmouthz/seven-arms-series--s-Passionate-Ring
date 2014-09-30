function EmployeeController($scope) {
    $scope.department = 'Engineering';
    $scope.employee = {
        name: 'Joe the Manager', reports: [{ name: 'John Smith' }, { name: 'Mary Run'}]
    };
}