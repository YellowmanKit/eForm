import UI from 'src/component/main/ui/UI';

export default class Row extends UI {

  row(){ return {...this.scale(0.95,0.05), ...this.style.row, ...this.style.border} }

  title(title, scale){ return this.texts.text(title, scale, 0.035, 'black', 'bold', 'left') }

}
