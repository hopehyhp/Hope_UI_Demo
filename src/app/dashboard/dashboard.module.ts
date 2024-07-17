import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard.component";
import { MenuComponent } from "../components/menu/menu.component";
import { TopbarComponent } from "./topbar/topbar.component";
import { DashboardRoutingMoudle } from "./dashboard-routing.moudle";
import { SidebarModule } from "primeng/sidebar";
import { FreeApiService } from "../common/services/free-api.service";


@NgModule({
  declarations: [DashboardComponent, MenuComponent, TopbarComponent],
    imports: [
        CommonModule, DashboardRoutingMoudle, SidebarModule
    ],
  providers: [FreeApiService]
})
export class DashboardModule { }
