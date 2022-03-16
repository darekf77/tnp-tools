//#region @notForNpm
//#region @browser
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-tnp-tools',
template: 'hello from tnp-tools'
})
export class TnpToolsComponent implements OnInit {
constructor() { }

ngOnInit() { }
}

@NgModule({
imports: [],
exports: [TnpToolsComponent],
declarations: [TnpToolsComponent],
providers: [],
})
export class TnpToolsModule { }
//#endregion

//#region @backend
async function start(port: number)  {

}

export default start;

//#endregion

//#endregion