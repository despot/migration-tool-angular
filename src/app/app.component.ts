import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Migration Tool!';
  currentDate  = new Date();

//  function getCurrentDate($scope) {
//      $scope.currentDate = new Date();
//  }
}
