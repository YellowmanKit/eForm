import UI from 'src/component/main/ui/UI';

export default class Extend extends UI {

  extend(hide){ return {...this.style.list, ...this.scale(1,1), ...{
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: hide? 'transparent':'rgba(0,0,0,0.5)',
    opacity: hide? 0: 1
  } } }

}
