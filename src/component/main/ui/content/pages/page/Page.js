import UI from 'src/component/main/ui/UI';

export default class Page extends UI {

  page(){ return {...this.style.list, ...{ backgroundColor: 'white', width: '100%', height: '100%' } } }

}
