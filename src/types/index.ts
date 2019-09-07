export type IPageComponent = (props: IPageProps) => JSX.Element

export interface IPageModule {
  PageContent: IPageComponent
}

export interface IPageProps {
  navigateToPage: (pageComponent: IPageModule) => void
}
