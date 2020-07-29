Page({
  data: {
    activeNames: ['1'],
  },
  onChange(event) {
    this.setData({
      activeNames: event.detail,
    });
  },
  showSxBox: function () {
    this.setData({
      popShow: true,
    });
  },
  onClose() {
    this.setData({
      popShow: false
    });
  },
});