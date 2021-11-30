import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { InputPasswordComponent } from './input-password.component';

describe('InputPasswordComponent', () => {
  let component: InputPasswordComponent;
  let fixture: ComponentFixture<InputPasswordComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPasswordComponent ],
      imports: [IonicModule.forRoot()],
      providers: [
        FormBuilder
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(InputPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
