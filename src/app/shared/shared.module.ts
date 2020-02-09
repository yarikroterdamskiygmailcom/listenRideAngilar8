import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SatDatepickerModule, SatNativeDateModule} from 'saturn-datepicker';
import {FiltersComponent} from './filters/filters.component';
import {DividerComponent} from './components/dividers/divider/divider.component';
import {LoaderSpinnerSmallComponent} from './components/loader/loader-spinner-small/loader-spinner-small.component';
import {HttpErrorMessageComponent} from './components/http-error-message/http-error-message.component';
// tslint:disable-next-line:max-line-length
import {CheckboxSubscribeToNewsletterComponent} from './components/form-controls/checkboxes/checkbox-subscribe-to-newsletter/checkbox-subscribe-to-newsletter.component';
// tslint:disable-next-line:max-line-length
import {CheckboxTermsAndConditionsComponent} from './components/form-controls/checkboxes/checkbox-terms-and-conditions/checkbox-terms-and-conditions.component';
import {ButtonCloseComponent} from './components/buttons/button-close/button-close.component';
import {LinkComponent} from './components/links/link/link.component';
import {LinkListComponent} from './components/links/link-list/link-list.component';
import {AutofocusDirective} from './directives/autofocus.directive';
import {FocusFirstInvalidFieldDirective} from './directives/focus-first-invalid-field.directive';
import {MaterialModule} from './modules/material/material.module';
import {NgxCaptchaModule} from 'ngx-captcha';
import {SocialMediaImgComponent} from './components/social-media-img/social-media-img.component';
import {SubscribeInputComponent} from './components/subscribe-input/subscribe-input.component';
import {MobileSortingComponent} from './components/mobile-sorting/mobile-sorting.component';
import {BikeCardComponent} from './components/bike-card/bike-card.component';
import {BikeCardMobileComponent} from './components/bike-card/bike-card-mobile/bike-card-mobile.component';
import {RouterModule} from '@angular/router';

const components = [
  FiltersComponent,
  DividerComponent,
  LoaderSpinnerSmallComponent,
  HttpErrorMessageComponent,
  SocialMediaImgComponent,
  SubscribeInputComponent,
  MobileSortingComponent,

  BikeCardComponent,
  BikeCardMobileComponent
];

const formControls = [
  CheckboxSubscribeToNewsletterComponent,
  CheckboxTermsAndConditionsComponent
];

const buttons = [
  ButtonCloseComponent
];

const links = [
  LinkComponent,
  LinkListComponent
];

const directives = [
  AutofocusDirective,
  FocusFirstInvalidFieldDirective
];

@NgModule({
  declarations: [
    ...components,
    ...formControls,
    ...buttons,
    ...links,
    ...directives,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SatDatepickerModule,
    SatNativeDateModule,
    MaterialModule,
    NgxCaptchaModule
  ],
  exports: [
    ...components,
    ...formControls,
    ...buttons,
    ...links,
    ...directives,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SatDatepickerModule,
    SatNativeDateModule,
    MaterialModule,
    SocialMediaImgComponent,
    SubscribeInputComponent,
  ],
  entryComponents: []
})
export class SharedModule {
}
