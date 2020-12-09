export const attendeeState = {
  countValue: 0,

  get count() {
    return this.countValue;
  },
  set count(val) {
    this.countValue = val;
    this.countListener(val);
  },
  countListener: function (val) {},
  registerNewListener: function (externalListenerFunction) {
    this.countListener = externalListenerFunction;
  },
};
