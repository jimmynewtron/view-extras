# View Extras

Adds sample settings to View class.


**Placeholder:**

Matcher to placeholders like `{{name}}` inside templates
```
View.match(/\{\{([\s\S]+?)\}\}/, function(match) {
	return match;
});
```

**Processors:**

Will be called after view rendering, to bind DOM childs to view object:

```
View.after(function() {
	var me = this;
	this.select('[view-bind]').each(function(node) {
		var name = $(node).attr('view-bind');
		if (name) {
			me[name] = node;
		}
	});
});
```

In a template like `<div view-bind="name">{{name}}</div>`, the view will have a property `name` bound to this node