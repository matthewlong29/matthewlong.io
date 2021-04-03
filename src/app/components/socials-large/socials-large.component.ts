import { Component, OnInit } from '@angular/core';
import { SocialPlatform, SocialPlatformBuilder } from '../../models/socials.model';

@Component({
  selector: 'dotio-socials-large',
  templateUrl: './socials-large.component.html',
  styleUrls: ['./socials-large.component.scss']
})
export class SocialsLargeComponent implements OnInit {
  public socials: Array<SocialPlatform>;

  constructor() { }

  ngOnInit(): void {
    const twitter: SocialPlatform = new SocialPlatformBuilder()
      .name('Twitter')
      .url('https://twitter.com/MaLong29')
      .icon('assets/icons/twitter.png')
      .build();

    const github: SocialPlatform = new SocialPlatformBuilder()
      .name('Github')
      .url('https://github.com/matthewlong29')
      .icon('assets/icons/github.png')
      .build();

    const discord: SocialPlatform = new SocialPlatformBuilder()
      .name('Discord')
      .url('https://discordapp.com/users/117410919675461633')
      .icon('assets/icons/discord.png')
      .build();

    this.socials = [];
    this.socials.push(twitter, github, discord);
  }
}
