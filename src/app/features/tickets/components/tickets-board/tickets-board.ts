import { Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import { TicketCard } from '../ticket-card/ticket-card';
import { Ticket } from '../../models/ticket.model';

@Component({
  selector: 'app-tickets-board',
  imports: [CommonModule, TicketCard],
  templateUrl: './tickets-board.html',
  styleUrl: './tickets-board.css',
})
export class TicketsBoard {
  allTickets: Ticket[] = [
    {
      id: '1',
      title: 'Setup staging environment',
      status: 'todo',
      priority: 'Medium',
      assignees: ['https://i.pravatar.cc/150?img=1', 'https://i.pravatar.cc/150?img=2']
    },
    {
      id: '2',
      title: 'API rate limiting',
      status: 'doing',
      priority: 'High',
      assignees: ['https://i.pravatar.cc/150?img=3']
    },
    {
      id: '3',
      title: 'Design onboarding flow',
      status: 'todo',
      priority: 'High',
      assignees: ['https://i.pravatar.cc/150?img=4']
    },
    {
      id: '4',
      title: 'Integrate SSO',
      status: 'done',
      priority: 'Low',
      assignees: ['https://i.pravatar.cc/150?img=5']
    },
    {
      id: '5',
      title: 'Release v1.2.0',
      status: 'done',
      priority: 'Medium',
      assignees: ['https://i.pravatar.cc/150?img=6']
    },
    {
      id: '6',
      title: 'Refactor auth module',
      status: 'doing',
      priority: 'Medium',
      assignees: ['https://i.pravatar.cc/150?img=7']
    }
  ];

  get todoTickets() {
    return this.allTickets.filter(t => t.status === 'todo');
  }

  get doingTickets() {
    return this.allTickets.filter(t => t.status === 'doing');
  }

  get doneTickets() {
    return this.allTickets.filter(t => t.status === 'done');
  }

  get happydayTickets() {
    return this.allTickets.filter(t => t.status === 'happyday');
  }

}
