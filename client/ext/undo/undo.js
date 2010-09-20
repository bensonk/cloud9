/**
 * Refactor Module for the Ajax.org Cloud IDE
 */
require.def("ext/undo/undo",
    ["core/ide", "core/ext"],
    function(ide, ext) {

return ext.register("ext/undo/undo", {
    dev    : "Ajax.org",
    name   : "Undo",
    alone  : true,
    type   : ext.GENERAL,

    nodes : [],

    init : function(amlNode){
        this.nodes.push(
            //mnuEdit.appendChild(new apf.divider()),
            mnuEdit.appendChild(new apf.item({
                caption : "Undo",
                hotkey  : "Ctrl-Z",
                onclick : function(){
                    tabEditors.getPage().$at.undo();
                }
            })),
            mnuEdit.appendChild(new apf.item({
                caption : "Redo",
                hotkey  : "Ctrl-Y",
                onclick : function(){
                    tabEditors.getPage().$at.redo();
                }
            }))
        );
    },

    enable : function(){
        this.nodes.each(function(item){
            item.enable();
        });
    },

    disable : function(){
        this.nodes.each(function(item){
            item.disable();
        });
    },

    destroy : function(){
        this.nodes.each(function(item){
            item.destroy(true, true);
        });
        this.nodes = [];
    }
});

    }
);