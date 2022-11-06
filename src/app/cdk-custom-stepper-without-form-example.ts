import { Component } from '@angular/core';
import { CdkStep, CdkStepper } from '@angular/cdk/stepper';
import { FormBuilder, Validators } from '@angular/forms';

/** @title A custom CDK stepper without a form */
@Component({
  selector: 'cdk-custom-stepper-without-form-example',
  templateUrl: './custom-stepper/cdk-custom-stepper-without-form-example.html',
  styleUrls: ['./custom-stepper/cdk-custom-stepper-without-form-example.css'],
})
export class CdkCustomStepperWithoutFormExample {
  isLinear = true;
  firstFormGroup = this._formBuilder.group({
    firstControl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondControl: ['', Validators.required],
  });

  constructor(private readonly _formBuilder: FormBuilder) {}

  toggleLinearity() {
    this.isLinear = !this.isLinear;
  }
}

/** Custom CDK stepper component */
@Component({
  selector: 'example-custom-stepper',
  templateUrl: './custom-stepper/example-custom-stepper.html',
  styleUrls: ['./custom-stepper/example-custom-stepper.css'],
  providers: [{ provide: CdkStepper, useExisting: CustomStepper }],
})
export class CustomStepper extends CdkStepper {
  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }

  checkProgressStepState(step: CdkStep, index: number): string {
    if (step.completed) {
      return 'pc-progress-step-complete';
    }

    if (this.selectedIndex === index) {
      return 'pc-progress-step-current';
    }

    return 'pc-progress-step-pending';
  }

  checkProgressTextState(step: CdkStep, index: number): string {
    if (step.completed) {
      return 'pc-progress-text-complete';
    }

    if (this.selectedIndex === index) {
      return 'pc-progress-text-current';
    }

    return 'pc-progress-text-pending';
  }

  checkProgressLineState(step: CdkStep, index: number): string {
    if (step.completed) {
      return 'pc-progress-line-complete';
    }

    return 'pc-progress-line-pending';
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
