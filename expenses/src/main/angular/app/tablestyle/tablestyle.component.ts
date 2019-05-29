import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TablestyleDataSource } from './tablestyle-datasource';

@Component({
  selector: 'app-tablestyle',
  templateUrl: './tablestyle.component.html',
  styleUrls: ['./tablestyle.component.css']
})
export class TablestyleComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TablestyleDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngAfterViewInit() {
    this.dataSource = new TablestyleDataSource(this.paginator, this.sort);
  }
}
