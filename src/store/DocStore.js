import { observable } from 'mobx';
import DocModel from './DocModel';

export default class DocStore {
    @observable models = [];

    index() {
        let model = new DocModel();
        model.title = '士大夫撒旦发发';
        model.body = '撒旦飞洒发发发发手动阀发射点法发撒撒旦撒旦发射点发射点发射点发射点法发所发生的士大夫撒旦发射点发手动阀手动阀撒旦发是';

        this.models.push(model);
    }
}
