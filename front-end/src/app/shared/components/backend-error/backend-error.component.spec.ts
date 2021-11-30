import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BackendErrorComponent } from './backend-error.component';

describe('BackendErrorComponent', () => {
  let component: BackendErrorComponent;
  let fixture: ComponentFixture<BackendErrorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendErrorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BackendErrorComponent);
    component = fixture.componentInstance;

    component.backendErrorsProps = {key: 'message', value: 'some error'};
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
