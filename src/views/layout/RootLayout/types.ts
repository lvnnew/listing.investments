export interface IListLink {
  url: string;
  title: any;
}

export interface IHeaderLinkButton {
  title: string,
  url?: string,
  linkList?: IListLink[];
}
