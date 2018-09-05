import {Component, Inject, OnInit, Optional} from '@angular/core';
import {
  LocalStorageService,
  ConfigOptionsService,
  GeneratorService,
  ConstantsService
} from '../../shared/services';
import {IConstants} from "../../shared/services/constantsService";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(
    @Optional() private LocalStorageService: LocalStorageService,
    @Optional() private ConfigOptionsService: ConfigOptionsService,
    @Inject('ConstantsService') private ConstantsService: IConstants,
    @Optional() private GeneratorService: GeneratorService
  ) {
  }

  ngOnInit() {
  }

}
