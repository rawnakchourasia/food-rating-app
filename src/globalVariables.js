const dataInFlow = {
  hideLog: false,
  onSelect: 'home',
};

// GETTING PROPERTIES
Object.defineProperty(dataInFlow, 'getHideLog', {
  get: function () {
    return this.hideLog;
  },
});

Object.defineProperty(dataInFlow, 'getOnSelect', {
  get: function () {
    return this.onSelect;
  },
});

// SETTING PROPERTIES
Object.defineProperty(dataInFlow, 'changeHideLog', {
  set: function (value) {
    this.hideLog = value;
  },
});

Object.defineProperty(dataInFlow, 'changeOnSelect', {
  set: function (value) {
    this.onSelect = value;
  },
});

export default dataInFlow;
