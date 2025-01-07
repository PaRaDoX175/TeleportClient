import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PartnersComponent } from './partners/partners.component';
import { InfrastructComponent } from './infrastruct/infrastruct.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { BusinessComponent } from './business/business.component';
import { TechSupportComponent } from './tech-support/tech-support.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutCompanyComponent,
    PartnersComponent,
    InfrastructComponent,
    SolutionsComponent,
    BusinessComponent,
    TechSupportComponent,
    ProjectsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-left',
      preventDuplicates: true,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
