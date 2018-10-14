import { observable } from 'mobx';

class DocStore {
    @observable models = new Set();
}
