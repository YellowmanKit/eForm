import UI from 'src/component/main/ui/UI';

export default class Page extends UI {

  page(){ return {...this.style.list, ...this.scale(1,0.864), ...{ backgroundColor: 'white' } } }

}
