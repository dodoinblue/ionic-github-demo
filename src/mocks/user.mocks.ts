import { User } from '../models/user.interface'

const userList: User[] = [
  {
    name: 'Charles Liu',
    company: 'Wearables',
    location: 'Vancouver, BC',
    bio: 'Go Wearables!',
    avatar_url: 'http://i.imgur.com/jav62p6.jpg',
    email: 'charles@example.com'
  }, 
  {
    name: 'Bob Doe',
    company: 'None',
    location: 'Richmod, BC',
    bio: 'Need a job',
    avatar_url: 'http://i.imgur.com/TMSIU4s.jpg',
    email: 'bob@example.com'
  }
]

export const USER_LIST = userList;