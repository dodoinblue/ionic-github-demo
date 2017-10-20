import { Repository } from '../models/repository.interface'
import { USER_LIST } from '../mocks/user.mocks'

const repositoryList: Repository[] = [
  {
    name: 'ionic 3 camera',
    description: 'camera plugin for ionic',
    owner: USER_LIST[0]
  },
  {
    name: 'ionic 3 SMS',
    description: 'SMS plugin for ionic',
    owner: USER_LIST[0]
  },
  {
    name: 'ionic 3 Geolocation',
    description: 'GPS plugin for ionic',
    owner: USER_LIST[1]
  },
  {
    name: 'ionic 3 Splash',
    description: 'Splash screen plugin for ionic',
    owner: USER_LIST[1]
  }
]

export const REPOSITORY_LIST = repositoryList;