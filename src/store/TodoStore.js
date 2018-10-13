import { observable, action } from 'mobx';
import axios from 'axios';

export default class TodoStore {
    @observable models = [];

    @action.bound index() {
        axios.get('/todo.json').then(({ data }) => this.models = data);
    }

    @action.bound add(model) {
        this.models.push(model);
    }

    @action.bound delete(model) {
        this.models = this.models.filter((item) => item.id !== model.id);
    }
}
