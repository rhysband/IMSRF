import { Component, OnInit, Input } from '@angular/core';
import { InventoryService, AuditService } from '@shared';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'view-feedback-dialog',
  templateUrl: './dialog/view-feedback.html',
  styleUrls: ['./reports.component.scss'],
})
export class ViewFeedbackComponent implements OnInit{
  @Input() value;

  constructor(
    public readonly activeModal: NgbActiveModal,
    ) {
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  isPartner = false;
  inventorySearchText: any;
  p1: any;
  p2: any;
  p3: any;
  p4: any;
  p5: any;
  p6: any;
  p7: any;
  p8: any;
  p9: any;
  p10: any;
  inventoryLog$: Observable<any>
  eventLog$: Observable<any>
  requestLog$: Observable<any>
  dispatchLog$: Observable<any>
  authenticationLog$: Observable<any>
  inventoryManifest$: Observable<any>
  donorLog$: Observable<any>
  requesterLog$: Observable<any>
  accountLog$: Observable<any>
  feedbackReport$: Observable<any>
  constructor(
    private readonly inventoryService: InventoryService,
    private readonly auditService: AuditService,
    private readonly modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  trackByFn(index) {
    return index;
  }

  getData() {
    this.inventoryLog$ = this.auditService.getInventoryLogs();
    this.eventLog$ = this.auditService.getEventLogs();
    this.requestLog$ = this.auditService.getRequestLogs();
    this.dispatchLog$ = this.auditService.getDispatchLogs();
    this.authenticationLog$ = this.auditService.getAuthenticationLogs();
    this.inventoryManifest$ = this.inventoryService.getAll();
    this.donorLog$ = this.auditService.getDonorLogs();
    this.requesterLog$ = this.auditService.getRequesterLogs();
    this.accountLog$ = this.auditService.getAccountLogs();
    this.feedbackReport$ = this.auditService.getFeedbackReport();
  }

  openViewFeedback(value) {
    const modalRef = this.modalService.open(ViewFeedbackComponent,{centered: true, scrollable: true, backdrop: 'static'});
    modalRef.componentInstance.value = value;

  }

}
