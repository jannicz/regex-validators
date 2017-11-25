/**
 * Validation lib
 * @author Jan Suwart
 *
 * @params options.dataAttribute
 * @params options.valFunctions
*/
(function(options) {

	'use strict';

	// Define nodeList iterator
	function forEachNode(array, callback, scope) {
		for (var i = 0; i < array.length; i++) {
			callback.call(scope, i, array[i]);
		}
	};

	// Initialize
	function init() {
		var inputs = document.querySelectorAll('[data-' + options.dataAttribute + ']');

		// Attach a validator function to each input
		forEachNode(inputs, function(i, item) {
			var data = item.dataset;
			var validatorFnName = data ? data[options.dataAttribute] : null;
			var validationFn;

			if (!validatorFnName) return;

			validationFn = getValidationFn(validatorFnName);

			if (validationFn) {
				var validFn = valid.bind(item, validationFn);
				item.addEventListener('change', validFn);
				item.addEventListener('keyup', validFn);
			}
		}, this);
	}

	// Get the validator definition function by name
	function getValidationFn(name) {
		if (options.valFunctions[name] && options.valFunctions[name]) {
			return options.valFunctions[name];
		} else if (window[name]) {
			return window[name];
		} else {
			return null;
		}
	}

	// Check validity of input agains a function
	function valid(fn, ev) {
		if (!fn) return;
		console.log('valid?', this.value, fn.call(null, this.value));

		var valid = fn.call(null, this.value);
		if (valid) {
			this.classList.remove('is-invalid');
			this.parentNode.classList.remove('has-errors');
		} else {
			this.classList.add('is-invalid');
			this.parentNode.classList.add('has-errors');
		}
		return valid;
	}

	init();
})({
	dataAttribute: 'validate',
	valFunctions: {}
});