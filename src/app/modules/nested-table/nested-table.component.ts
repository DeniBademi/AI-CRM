import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddColumnDialogComponent } from './add-column-dialog.component';
import { FormsModule } from '@angular/forms';

export interface PersonData {
  name: string;
  title: string;
  label: string;
  lastAction: string;
  email: string;
  linkedin: string;
  phone: string;
  assignedTo: string;
}

export interface CompanyData {
  companyName: string;
  favicon: string;
  dealStage: string;
  categories: string[];
  leadOrigin: string;
  dealOpened: string;
  signals: string[];
  people: PersonData[];
  [key: string]: any; // Allow dynamic properties
}

@Component({
  selector: 'app-nested-table',
  templateUrl: './nested-table.component.html',
  styleUrls: ['./nested-table.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    FormsModule,
  ],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class NestedTableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChildren('innerSort') innerSort: QueryList<MatSort>;
  @ViewChildren('innerTables') innerTables: QueryList<MatTable<PersonData>>;

  dataSource: MatTableDataSource<CompanyData>;
  innerDataSource: MatTableDataSource<PersonData>;

  baseColumns = [
    'expand',
    'companyName',
    'dealStage',
    'categories',
    'leadOrigin',
    'dealOpened',
    'signals'
  ];

  dynamicColumns: string[] = [];

  innerColumnsToDisplay = [
    'name',
    'title',
    'label',
    'lastAction',
    'actions',
    'assignedTo'
  ];

  get allColumns(): string[] {
    // Combine base columns, dynamic columns, and ensure actions is last
    return [...this.baseColumns, ...this.dynamicColumns, 'actions'];
  }

  columnDefinitions = {
    expand: { header: '', sortable: false },
    companyName: { header: 'Company Name', sortable: true },
    dealStage: { header: 'Deal Stage', sortable: true },
    categories: { header: 'Categories', sortable: true },
    leadOrigin: { header: 'Lead Origin', sortable: true },
    dealOpened: { header: 'Deal opened', sortable: true },
    signals: { header: 'Signals', sortable: true },
    actions: { header: '', sortable: false }
  };

  innerColumnDefinitions = {
    name: { header: 'Name', sortable: true },
    title: { header: 'Title', sortable: true },
    label: { header: 'Label', sortable: true },
    lastAction: { header: 'Last Action', sortable: true },
    actions: { header: 'Actions', sortable: false },
    assignedTo: { header: 'Assigned to', sortable: true }
  };

  expandedElement: CompanyData | null = null;

  // Sample data
  sampleData: CompanyData[] = [
    {
      companyName: 'Apple',
      favicon: 'https://www.apple.com/favicon.ico',
      dealStage: 'Meeting Request',
      categories: ['b2b', 'saas', 'HR', 'recruiting'],
      leadOrigin: 'cold email',
      dealOpened: '92 days ago',
      signals: ['High growth', 'Recent funding'],
      people: [
        {
          name: 'John Smith',
          title: 'VP of Sales',
          label: 'Economic buyer',
          lastAction: 'Email sent 2 days ago',
          email: 'john@acme.com',
          linkedin: 'linkedin.com/in/john',
          phone: '+1234567890',
          assignedTo: 'Sarah'
        },
        {
          name: 'Jane Doe',
          title: 'HR Director',
          label: 'Decision maker',
          lastAction: 'Meeting scheduled',
          email: 'jane@acme.com',
          linkedin: 'linkedin.com/in/jane',
          phone: '+1234567891',
          assignedTo: 'Mike'
        }
      ]
    },
    {
      companyName: 'Google',
      favicon: 'https://www.google.com/favicon.ico',
      dealStage: 'Evaluation',
      categories: ['b2b', 'tech', 'startup'],
      leadOrigin: 'referral',
      dealOpened: '45 days ago',
      signals: ['Expanding team', 'New office'],
      people: [
        {
          name: 'Bob Wilson',
          title: 'CEO',
          label: 'Decision maker',
          lastAction: 'Call completed',
          email: 'bob@techstart.com',
          linkedin: 'linkedin.com/in/bob',
          phone: '+1234567892',
          assignedTo: 'Sarah'
        }
      ]
    }
  ];

  constructor(
    private cd: ChangeDetectorRef,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.sampleData);
    this.dataSource.sort = this.sort;
  }

  toggleRow(element: CompanyData) {
    this.expandedElement = this.expandedElement === element ? null : element;
    if (this.expandedElement) {
      this.innerDataSource = new MatTableDataSource(element.people);
      this.cd.detectChanges();
      if (this.innerSort.length > 0) {
        this.innerDataSource.sort = this.innerSort.first;
      }
    }
  }

  addColumn() {
    const dialogRef = this.dialog.open(AddColumnDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Add the column to definitions first
        this.columnDefinitions[result] = {
          header: result,
          sortable: true
        };

        // Add empty values for the new column to all existing data
        this.dataSource.data = this.dataSource.data.map(item => ({
          ...item,
          [result]: 'N/A' // Default value for new column
        }));

        // Add the column to dynamic columns array
        this.dynamicColumns = [...this.dynamicColumns, result];

        // Force refresh
        this.cd.detectChanges();
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyInnerFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.innerDataSource.filter = filterValue.trim().toLowerCase();
  }

  getColumnHeader(column: string): string {
    return this.columnDefinitions[column]?.header || column;
  }

  getInnerColumnHeader(column: string): string {
    return this.innerColumnDefinitions[column]?.header || column;
  }

  isColumnSortable(column: string): boolean {
    return this.columnDefinitions[column]?.sortable ?? true;
  }

  isInnerColumnSortable(column: string): boolean {
    return this.innerColumnDefinitions[column]?.sortable ?? true;
  }
}

