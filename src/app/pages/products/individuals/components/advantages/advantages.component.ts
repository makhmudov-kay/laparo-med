import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.less'],
  standalone: true,
  imports: [NgFor],
})
export class AdvantagesComponent {
  advantages = [
    'Made in Collaboration with the Best - our simulators are developed in a close relationship with seasoned medical practitioners and surgeons. We are constantly expanding our selection of training modules and trainers in response to the evolving needs.',
    'Global Standard - we help train medical staff around the world. We have been trusted by clients from over 90 countries and we are seeing success in implementing our systems at medical simulation centers around the world.',
    'Unlimited Access - we want for every surgeon and every medical student to have the ability to train and perfect their surgical techniques without limitations.',
    'Training Freedom - Whether at home or with friends, we want you to have the freedom of choice. You should be able to have full value training whenever and wherever you want.',
    'Continuing Growth - medical education does not end with a diploma. It is a lifelong process. Take care of your education by maintaining and developing practical skills.',
    'Systematic training is the key to success - no matter your existing knowledge, surgery requires regular practice.',
  ];
}
