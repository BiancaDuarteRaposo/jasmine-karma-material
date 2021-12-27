import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PostModel } from '../../models/post.model';

import { FormPostsComponent } from './form-posts.component';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FormPostsComponent', () => {
  let component: FormPostsComponent;
  let fixture: ComponentFixture<FormPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormPostsComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,

        MatButtonModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,

        BrowserAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when is empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('title field when is empty', () => {
    let errors: any = {};
    let fieldName: string = 'title';

    let fieldControl = component.form.controls[fieldName];
    expect(fieldControl.valid).toBeFalsy();

    // Title field is required
    errors = fieldControl.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('title field when is valid', () => {
    let errors: any = {};
    let fieldName: string = 'title';

    let fieldControl = component.form.controls[fieldName];

    // Set title to something correct
    fieldControl.setValue('test');
    errors = fieldControl.errors || {};
    expect(errors['required']).toBeFalsy();
  });

  it('body field when is empty', () => {
    let errors: any = {};
    let fieldName: string = 'body';

    let fieldControl = component.form.controls[fieldName];
    expect(fieldControl.valid).toBeFalsy();

    // Body field is required
    errors = fieldControl.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('body field when is valid', () => {
    let errors: any = {};
    let fieldName: string = 'body';

    let fieldControl = component.form.controls[fieldName];

    // Set title to something correct
    fieldControl.setValue('test');
    errors = fieldControl.errors || {};
    expect(errors['required']).toBeFalsy();
  });

  it('submitting a form emits a post', () => {
    // criei um objeto padrão com dados que eu conheço
    let postValid: PostModel = {
      title: 'test@test.com',
      body: '123456789',
      userId: 4,
      id: 1,
    };
    //seta no form o objeto que eu conheço para preencher os controles do form
    component.form.patchValue(postValid);
    expect(component.form.valid).toBeTruthy();

    //criei uma variável para guardar o resultado que está sendo emitido para o componente pai
    let postEvent = new PostModel();
    // fiz a subscrição no form event (o que emite evento para o pai) para pegar o resultado que foi enviado
    component.formEvent.subscribe({
      next: (ev: PostModel) => {
        postEvent = ev;
      },
    });
    //método que eu realmente quero testar: acionei o submit do Form
    component.submitForm();

    // comparo o que foi setado no form com o que foi enviado ao filho
    expect(postValid.title).toEqual(postEvent.title);
    expect(postValid.body).toEqual(postEvent.body);
  });
});
