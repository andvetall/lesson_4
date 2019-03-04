//1 (3 points)
var womansBag = {
    content: [
        "Passpor",
        "Lipstick",
        "Mobile",
        "Mirrow",
        "Notepad",
        "Tablet"
    ],
    addItem: function ( item ) {
        this.content.push ( item )
    } ,
    deleteITEM: function ( num ) {
        this.content.splice ( num, 1 )
    }
}
console.log (womansBag)