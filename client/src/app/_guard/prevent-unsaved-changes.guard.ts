import { CanDeactivateFn } from '@angular/router';
import { MemberEditComponent } from '../member/member-edit/member-edit.component';

export const preventUnsavedChangesGuard: CanDeactivateFn<MemberEditComponent> = (component) => {
  if (component.editForm?.dirty) {
    return confirm('Are you sure you wan to continue? Any unsaved changes will be lost')
  }
  return true;
};
