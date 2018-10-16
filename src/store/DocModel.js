import { observable } from 'mobx';

export default class DocModel {
    @observable id = Math.random();
    @observable title = '';
    @observable body = '';
}
