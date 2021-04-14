import { VuexModule, Module } from 'vuex-module-decorators'
import { Driver } from '~/protos/service_pb'

export interface Manager {
  firstName: String
  lastName: String
  email: String
  photo: String
}

@Module({ name: 'Admin' })
export default class Admin extends VuexModule {
  admin: Manager | undefined
}
