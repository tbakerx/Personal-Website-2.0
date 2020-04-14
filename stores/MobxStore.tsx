import { observable, action, toJS } from 'mobx'

class MobxStore {

  @observable testStore: string = 'Store is working'

  constructor(initialData: any) {
    if (!(Object.entries(initialData).length === 0)) {
      this.testStore = initialData.testStore
    }
  }

  @action setTestStore(input: string) {
    this.testStore = input
  }

  getTestStore() {
    return (this.testStore)
  }
  __data() {
    return {
      testStore: this.testStore
    }
  }
}
export default MobxStore