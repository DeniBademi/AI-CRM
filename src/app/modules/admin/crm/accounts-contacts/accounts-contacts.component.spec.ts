import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsContactsComponent } from './accounts-contacts.component';

describe('AccountsContactsComponent', () => {
  let component: AccountsContactsComponent;
  let fixture: ComponentFixture<AccountsContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsContactsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
