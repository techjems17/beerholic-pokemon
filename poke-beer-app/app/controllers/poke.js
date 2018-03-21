import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
      updateCurrentPoke(value) {
        var currentPoke = this.get("model.beerList").filter(beer => {
          return beer.id == value;
        });
        this.set("currentPoke", currentPoke);
      }
    }
});
