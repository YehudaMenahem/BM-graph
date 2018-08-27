import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ElasticBoxComponent } from './elastic-box.component';

describe('ElasticBoxComponent', () => {
  let component: ElasticBoxComponent;
  let fixture: ComponentFixture<ElasticBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElasticBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElasticBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
