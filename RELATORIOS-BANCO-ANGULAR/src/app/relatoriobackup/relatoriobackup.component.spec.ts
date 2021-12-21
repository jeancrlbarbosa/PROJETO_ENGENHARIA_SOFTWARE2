import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriobackupComponent } from './relatoriobackup.component';

describe('RelatoriobackupComponent', () => {
  let component: RelatoriobackupComponent;
  let fixture: ComponentFixture<RelatoriobackupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatoriobackupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatoriobackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
