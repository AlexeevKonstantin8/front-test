import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {UserPropsModel} from '../../app.model';
import {UserPropsService} from './user-props.service';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-user-props',
  templateUrl: './user-props.component.html',
  styleUrls: ['./user-props.component.sass']
})
export class UserPropsComponent implements OnInit {

  public instanceDialog: any;
  public selectedColorItemId: number;
  public user: UserPropsModel;
  public form: FormGroup;
  public isSaving: boolean;
  private _service: UserPropsService;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this._service = new UserPropsService(http);

    this.form = this.fb.group({
      name: '',
      email: '',
      phone: '',
      address: this.fb.group({
        city: '',
        street: '',
      }),
    });
  }

  ngOnInit() {
    this.selectedColorItemId = this.instanceDialog.data.selectedColorItemId;
    this.user = this.instanceDialog.data.user;

  }

  onSaveClick(): void {
    this.isSaving = true;
    this._service
      .updateUserProps(this.user)
      .finally(() => this.isSaving = false)
      .subscribe(data => this.instanceDialog.closeDialog(data))
  }

  onCloseClick(): void {
    this.instanceDialog.closeDialog();
  }

}
