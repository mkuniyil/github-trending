export type userDetailType = {
  username: string
  url: string
  avatar: string
}

export type RepositoryItemProps = {
  rank: string
  username: string
  repositoryName: string
  url: string
  description?:string
  language?: string
  languageColor?:string
  totalStars:number
  forks:number
  starsSince:number
  since: string
  builtBy: userDetailType[]
}

export type repositoryType = {
  repositoryName:string
  description:string
  url:string
}

export type DeveloperItemProps = {
  rank: string
  username: string
  name: string
  url: string
  avatar:string
  since: string
  popularRepository: repositoryType
}