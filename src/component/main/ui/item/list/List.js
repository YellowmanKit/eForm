import UI from 'src/component/main/ui/UI';

export default class List extends UI {

  list(){ return {...this.style.list, ...{ width: this.size[0] } } }

}
