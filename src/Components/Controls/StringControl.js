import Rete from 'rete';

export class StringControl extends Rete.Control {
   constructor(emitter, key) {
      super(key);
      this.emitter = emitter;
      this.template =
         '<input type="number" :value="value" @input="change($event)"/>';

      this.scope = {
         value: 0,
         change: this.change.bind(this),
      };
   }

   change(e) {
      this.scope.value = +e.target.value;
      this.update();
   }

   update() {
      this.putData('num', this.scope.value);
      this.emitter.trigger('process');
      this._alight.scan();
   }

   mounted() {
      this.scope.value = this.getData('num') || 0;
      this.update();
   }

   setValue(val) {
      this.scope.value = val;
      this._alight.scan();
   }
}
