(function (Drupal) {
  Drupal.behaviors.mytheme = {
    attach(context) {
      const myVar = 10;
      console.log(myVar, context);
    },
  };
})(Drupal);
