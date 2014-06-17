/* global ko */
(function() {

  function ExoController() {

   this.availableFramework = ['Ember', 'Backbone', 'Prototype'];
   this.frameworkMark = ['1', '2', '3', '4', '5'];

	this.chosenFramework= ko.observable();
	this.chosenMark= ko.observable();

	this.bothChosen= ko.computed(function bothChosen() {
		return this.chosenFramework() && this.chosenMark();
	}, this);
    }

  ko.applyBindings(new ExoController());

})();
