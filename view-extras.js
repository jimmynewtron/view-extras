$(function() {

	// adds {{name}} placeholder
	View.match(/\{\{([\s\S]+?)\}\}/, function(match) {
		return match;
	});

	// child selectors
	View.before(function() {
		if (typeof this.childSelectors === 'object') {
			var me = this, base = '#' + this.getId() + '-';
			_.each(this.childSelectors, function(selector, key) {
				me[key] = me.select(base + item);
			});
		}
	});

	// <div view-bind="name"> attributes
	View.after(function() {
		var me = this;
		this.select('[view-bind]').each(function(node) {
			var name = $(node).attr('view-bind');
			if (name) {
				me[name] = node;
			}
		});
	});

});