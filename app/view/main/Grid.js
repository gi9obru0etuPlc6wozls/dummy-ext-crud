Ext.define('FS2.grid.column.Date', {
    extend: 'Ext.grid.column.Date',
    alias: ['widget.datecolumn'],
    requires: ['Ext.Date'],
    alternateClassName: 'FS2.grid.DateColumn',

    setFormat: function(x) {
        this.format = x;
    },

    getFormat: function() {
        return this.format;
    }
});

Ext.define('C.view.main.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'maingrid',
    publishes:['currentEntry'],
    bind: {
        store: '{entries}',
        title: '{grid.title}'
    },
    dockedItems: [{
        xtype: 'toolbar',
        items: ['->', {
            xtype: 'button',
            action: 'add',
            bind: '{grid.addBtnText}',
            iconCls: 'fa-plus-circle',
            handler:  'onGridAddBtnClick'
        }]
    }],
    // plugins: [
    //     Ext.create('Ext.grid.plugin.RowEditing', {
    //         clicksToEdit: 1
    //     })
    // ],
    columns: [{
        xtype: 'actioncolumn',
        bind: {
          width: '{columns.id.text}',
        },
        width: 40,
        align: 'center',
        items: [{
            action: 'del',
            iconCls: 'fa-minus-circle',
            handler: 'onGridDelBtnClick',
            getTip: function() {
                return this.lookupViewModel().get('grid.delBtnText');
            }
        }]
    }, {
        dataIndex: 'id',
        bind: {
            text: '{columns.id.text}',
            width: '{columns.id.width}'
        },

    }, {
        dataIndex: 'name',
        bind: {
            text: '{columns.name.text}',
            width: '{columns.name.width}',
            // editor: '{columns.name.editor}',
        },
    }, {
        dataIndex: 'title',
        bind: {
            text: '{columns.name.text}',
            width: '{columns.name.width}',
            // editor: '{columns.name.editor}',
        },
        //editor: 'textfield'
    }, {
        dataIndex: 'description',
        bind: {
            text: '{columns.description.text}',
            width: '{columns.description.width}',
            flex: '{columns.description.flex}'
            // editor: '{columns.name.editor}',
        },
        // editor: 'textfield'
    }, {
        dataIndex: 'date',
        xtype: 'datecolumn',
        bind: {
            text: '{columns.date.text}',
            width: '{columns.date.width}',
            format: '{columns.date.format}',
            // editor: '{columns.name.editor}',
        }
    }],

    listeners: {
        select: 'onGridRowSelect'
    }
});

