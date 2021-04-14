import { VuexModule, Module } from 'vuex-module-decorators'

export interface Manager {
  firstName: String
  lastName: String
  email: String
  photo: String
}

@Module({ name: 'Admin', stateFactory: true, namespaced: true })
export default class Admin extends VuexModule {
  admin: Manager | undefined
}
