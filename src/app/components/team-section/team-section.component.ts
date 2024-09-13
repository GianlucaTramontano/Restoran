import { Component } from '@angular/core';
import { TeamMember } from 'src/app/interfaces/team-member';

@Component({
  selector: 'app-team-section',
  templateUrl: './team-section.component.html',
  styleUrls: ['./team-section.component.css']
})
export class TeamSectionComponent {
  teamMembers: TeamMember[] = [
    {
      id: 1,
      fullName: 'John Doe',
      designation: 'Chef',
      imageUrl: 'https://themewagon.github.io/restoran/img/team-1.jpg',
      socialLinks: [
        {
          id: 1,
          url: 'https://www.facebook.com/john.doe',
          icon: 'fa-facebook-f'
        },
        {
          id: 2,
          url: 'https://www.twitter.com/john.doe',
          icon: 'fa-twitter'
        },
        {
          id: 3,
          url: 'https://www.instagram.com/john.doe',
          icon: 'fa-instagram'
        }
      ]
    },
    {
      id: 1,
      fullName: 'John Doe',
      designation: 'Chef',
      imageUrl: 'https://themewagon.github.io/restoran/img/team-1.jpg',
      socialLinks: [
        {
          id: 1,
          url: 'https://www.facebook.com/john.doe',
          icon: 'fa-facebook-f'
        },
        {
          id: 2,
          url: 'https://www.twitter.com/john.doe',
          icon: 'fa-twitter'
        },
        {
          id: 3,
          url: 'https://www.instagram.com/john.doe',
          icon: 'fa-instagram'
        }
      ]
    },{
      id: 1,
      fullName: 'John Doe',
      designation: 'Chef',
      imageUrl: 'https://themewagon.github.io/restoran/img/team-1.jpg',
      socialLinks: [
        {
          id: 1,
          url: 'https://www.facebook.com/john.doe',
          icon: 'fa-facebook-f'
        },
        {
          id: 2,
          url: 'https://www.twitter.com/john.doe',
          icon: 'fa-twitter'
        },
        {
          id: 3,
          url: 'https://www.instagram.com/john.doe',
          icon: 'fa-instagram'
        }
      ]
    },
    {
      id: 1,
      fullName: 'John Doe',
      designation: 'Chef',
      imageUrl: 'https://themewagon.github.io/restoran/img/team-1.jpg',
      socialLinks: [
        {
          id: 1,
          url: 'https://www.facebook.com/john.doe',
          icon: 'fa-facebook-f'
        },
        {
          id: 2,
          url: 'https://www.twitter.com/john.doe',
          icon: 'fa-twitter'
        },
        {
          id: 3,
          url: 'https://www.instagram.com/john.doe',
          icon: 'fa-instagram'
        }
      ]
    }
  ];

}
