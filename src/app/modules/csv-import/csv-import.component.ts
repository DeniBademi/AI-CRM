import { Component, ChangeDetectorRef, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Papa from 'papaparse';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

export interface Connection {
  sourceId: string;
  destId: string;
  path: string;
}

@Component({
  selector: 'app-csv-import',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './csv-import.component.html',
  styleUrls: ['./csv-import.component.css']
})
export class CsvImportComponent implements AfterViewInit {
  csvHeaders: string[] = [];
  csvData: any[] = [];
  mappingForm: FormGroup;
  connections: Connection[] = [];

  // These are the fields our CRM requires
  requiredFields = ['Company Name', 'Contact Name', 'Contact Title', 'Deal Opened Date', 'Last Action'];

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private el: ElementRef
  ) {
    this.mappingForm = this.fb.group({});
  }

  ngAfterViewInit(): void {
    // We might need this later to recalculate lines on window resize
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          this.csvHeaders = result.meta.fields || [];
          this.csvData = result.data.slice(0, 5); // Preview

          this.requiredFields.forEach(field => {
            this.mappingForm.addControl(field, this.fb.control(''));
          });

          // Listen for changes in the mapping form to update the lines
          this.mappingForm.valueChanges.subscribe(() => {
            this.updateConnections();
          });
        }
      });
    }
  }

  // Helper function to create a CSS-safe ID from a string
  slugify(text: string): string {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }

  updateConnections(): void {
    // Use setTimeout to allow the DOM to update before we measure element positions
    setTimeout(() => {
      this.connections = [];
      const formValue = this.mappingForm.value;

      for (const field of this.requiredFields) {
        const selectedHeader = formValue[field];
        if (selectedHeader) {
          const sourceId = `source-${this.slugify(selectedHeader)}`;
          const destId = `dest-${this.slugify(field)}`;
          const path = this.calculatePath(sourceId, destId);
          if (path) {
            this.connections.push({ sourceId, destId, path });
          }
        }
      }
      this.cdr.detectChanges(); // Manually trigger change detection to draw the new lines
    }, 0);
  }

  calculatePath(sourceId: string, destId: string): string | null {
    const sourceEl = this.el.nativeElement.querySelector(`#${sourceId}`);
    const destEl = this.el.nativeElement.querySelector(`#${destId}`);

    if (!sourceEl || !destEl) {
      return null;
    }

    const containerRect = this.el.nativeElement.querySelector('.mapping-container').getBoundingClientRect();
    const sourceRect = sourceEl.getBoundingClientRect();
    const destRect = destEl.getBoundingClientRect();

    // Calculate positions relative to the container
    const startX = sourceRect.right - containerRect.left;
    const startY = sourceRect.top - containerRect.top + sourceRect.height / 2;
    const endX = destRect.left - containerRect.left;
    const endY = destRect.top - containerRect.top + destRect.height / 2;

    // Control points for the curve
    const controlX1 = startX + 50;
    const controlY1 = startY;
    const controlX2 = endX - 50;
    const controlY2 = endY;

    return `M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`;
  }


  onMappingSubmit(): void {
    console.log('Mapping:', this.mappingForm.value);
    // Logic to send data to Supabase will go here
  }
}
