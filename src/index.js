var ExpandCollapse = require('expandable');

Accordion = function (opts) {
	var self = this;

	var defaults = {
		//When large items collaps sometimes the activated item falls out of view. This option stops that from hapening.
		scrollCompensate: true,
		// Characteristic of the according. Others should close when the selected one opens. You might want to disable this temporarily, say for Ctrl+F word searching.
		shouldCloseOthers: true
	};

	$.extend(this, defaults, opts);
	$.extend(this, new ExpandCollapse(this));

	var closeOthers = function() {
		console.log('should close others is: ' + self.shouldCloseOthers);
		if (!self.shouldCloseOthers) {
			console.log('shouldCloseOthers is disabled. I won\'t close others that might be open');
			return;
		}
		console.log('Accordion: Closing others...');

		if (self.scrollCompensate) {
			//Do a balancing act. When large items collapse, scroll up by that amount to follow the newly activated item
			//Get my height..
			var openedRect = $(this)[0].getBoundingClientRect();
			openedRect.y = openedRect.top;
		}

		//Close
		$('details[accordion]').not(self.el).each(function() {
			// If I have a name defined, only close those who share my name
			if (typeof self.name !== "undefined" && $(this).attr('name') !== self.name) {
				// doesn't share my name; don't close it.
				return true;
			}

			if (self.scrollCompensate) {
				var closingRect = $(this)[0].getBoundingClientRect();
				closingRect.y = closingRect.top;

				//Is this element above me?
				if (closingRect.y < openedRect.y) {
					// scroll up by the height of the collapsing question's body
					var closingBodyHeight = $(this).children('div').height();
					window.scrollBy(0, -closingBodyHeight);
				}
			}

			console.log('Closing', $(this)[0]);
			$(this)[0].removeAttribute('open');
		});
	}

	$(this.el).find('summary').on('click', closeOthers);

	//Create an event by which an accordion can be disabled and enabled
	$(this.el).on('enableAutoClose', function() {
		self.shouldCloseOthers = true;
	});
	$(this.el).on('disableAutoClose', function() {
		console.log('Disabling Auto Close. Now, this accordion won\'t close others. ');
		self.shouldCloseOthers = false;
	});

	return this;
}

module.exports = Accordion;
