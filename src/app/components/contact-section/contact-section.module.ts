import { NgModule } from "@angular/core";
import { ContactSectionComponent } from "./contact-section.component";
import { SharedModule } from "src/app/shared/shared.module";
import { CommonModule } from "@angular/common";
import { MapComponent } from "../map/map.component";
import { ContactFormComponent } from "../contact-form/contact-form.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [MapComponent, ContactSectionComponent, ContactFormComponent],
    imports: [CommonModule, SharedModule, FormsModule],
    exports: [MapComponent, ContactSectionComponent, ContactFormComponent]
})
export class ContactSectionModule { }