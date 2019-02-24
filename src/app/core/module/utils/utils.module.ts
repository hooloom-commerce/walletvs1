import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../../../common/utils/forms/form/form.component';
import { FormQuestionComponent } from '../../../common/utils/forms/form-question/form-question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormComponent,
    FormQuestionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormComponent,
    FormQuestionComponent
  ]
})
export class UtilsModule { }
