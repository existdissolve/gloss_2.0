Ext.define("Gloss.store.CF10", {
    extend: "Ext.data.TreeStore",
	autoLoad: true,
	model:	"Gloss.model.Navigation",
	root:	{
		expanded:	 true,
		id:			"root"
	},
	proxy:	{
		type:	"ajax",
		url: "nav_handler.cfm?type=cf10"
	}
});