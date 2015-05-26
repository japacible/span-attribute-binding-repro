Polymer({
  is: 'span-attribute-binding',

  properties: {
    helloWorldText_ : {
      type: String,
      value: 'Hello World',
    },
  },

  onHelloWorldClick_: function() {
    console.log('Hello World clicked');
  },
});
