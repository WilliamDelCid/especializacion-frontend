import { Component, OnInit, Input } from '@angular/core';
import { List } from '../../../interface/list.interface';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RespuestaService } from 'src/app/modules/service/respuesta.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  list: List[] = [
    {
      icon: '<svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',
      title: 'Examples',
      list: [
        'Explain quantum computing in simple terms',
        'Got any creative ideas for a 10 year old’s birthday?',
        'How do I make an HTTP request in Javascript?',
      ],
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6" height="1em" width="1em"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path></svg>',
      title: 'Capabilities',
      list: [
        'Remembers what user said earlier in the conversation',
        'Allows user to provide follow-up corrections',
        'Trained to decline inappropriate requests',
      ],
    },
    {
      icon: '<svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
      title: 'Limitations',
      list: [
        'May occasionally generate incorrect information',
        'May occasionally produce harmful instructions or biased content',
        'Limited knowledge of world and events after 2021',
      ],
    },
  ];

  constructor(
    private sanitizer: DomSanitizer,
    private servicio: RespuestaService
  ) {}

  public getSafeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  get resultadoList() {
    return this.servicio.resultado;
  }

  get arregloTodo() {
    return this.servicio.conversacion;
  }

  ngOnInit(): void {}
}
