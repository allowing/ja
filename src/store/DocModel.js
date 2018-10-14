import { observable } from 'mobx';

class DocModel {
    @observable id = Math.random();
    @observable title = '';
    @observable body = '';
}
