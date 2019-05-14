import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JugtoulouseSharedLibsModule, JugtoulouseSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [JugtoulouseSharedLibsModule, JugtoulouseSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JugtoulouseSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JugtoulouseSharedModule {
  static forRoot() {
    return {
      ngModule: JugtoulouseSharedModule
    };
  }
}
