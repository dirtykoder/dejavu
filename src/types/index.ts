import { Dispatch } from "react";

export interface IGameState {
  timeOfDay: Date
  playerName: string
}

export interface IGameStateAction {
  type: string
  payload: any
}

export type IPageComponent = (props: IPageProps) => JSX.Element

export interface IPageModule {
  PageContent: IPageComponent
}

export interface IPageProps {
  navigateToPage: (pageComponent: IPageModule) => void
  state: IGameState
  dispatch: Dispatch<IGameStateAction>
}
