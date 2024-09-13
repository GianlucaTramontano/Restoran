import { Component, Input } from '@angular/core';
import { TeamMember } from 'src/app/interfaces/team-member';

@Component({
  selector: 'app-team-member-card',
  templateUrl: './team-member-card.component.html',
  styleUrls: ['./team-member-card.component.css']
})
export class TeamMemberCardComponent {
  @Input() member: TeamMember = {
    id: 0,
    fullName: '',
    designation: '',
    imageUrl: '',
    socialLinks: []
  };
}
