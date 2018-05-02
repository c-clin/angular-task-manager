import { DataStorageService } from './../data.storage.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Anguar Todo App';

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }

  onSaveList() {
    this.dataStorageService.storeTodos()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchList() {
    this.dataStorageService.getTodos();
  }
}
