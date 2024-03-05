import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-support',
  templateUrl: './tech-support.component.html',
  styleUrls: ['./tech-support.component.scss'],
})
export class TechSupportComponent {
  arr = [
    'проведение комплексного обследования IT-инфраструктуры',
    'решение проблемных ситуаций, связанных с информационными системами',
    'размещение технических специалистов на объектах заказчика',
    'удаленное управление IT-системами, сервисами и оборудованием',
    'обеспечение мониторинга элементов IT-инфраструктуры',
    'внедрение проактивных инструментов реагирования на угрозы',
  ];
}
