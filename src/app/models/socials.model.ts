export class SocialPlatform {
  public name: string;
  public description: string;
  public url: string;
  public icon: string;

  constructor(name: string, description: string, url: string, icon: string) {
    this.name = name;
    this.description = description;
    this.url = url;
    this.icon = icon;
  }
}

export class SocialPlatformBuilder {
  private _name: string;
  private _description: string;
  private _url: string;
  private _icon: string;

  public build(): SocialPlatform {
    return new SocialPlatform(this._name, this._description, this._url, this._icon);
  }

  public name(name: string): SocialPlatformBuilder {
    this._name = name;
    return this;
  }

  public description(description: string): SocialPlatformBuilder {
    this._description = description;
    return this;
  }

  public url(url: string): SocialPlatformBuilder {
    this._url = url;
    return this;
  }

  public icon(icon: string): SocialPlatformBuilder {
    this._icon = icon;
    return this;
  }
}
