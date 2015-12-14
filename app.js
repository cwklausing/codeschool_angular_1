/**
 * Created by cwklausing on 12/13/15.
 */
/* Notes:
MODULES are where we write pieces of our Angular application.
    Also makes our code more maintainable, testable, and readable
    Where we define dependencies for our app.
EXPRESSIONS allow you to insert dynamic values into your HTML
CONTROLLERS are where we define our apps behavior by defining
    functions and values.
DIRECTIVES are html annotations that trigger Javascript behaviors.
 */

//wrapping Javascript in a closure.
(function(){
    //store: application name, []: depedencies
    var app = angular.module('store', []);

    app.controller('StoreController', function(){
        this.product = gems;
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'A good shape',
            canPurchase: false,
            soldOut: false,
            image: './images/dodecahedron.jpg'
        },
        {
            name: "Amethyst",
            price: 4.99,
            description: "Purple! Perfect for a Vikings' fan",
            canPurchase: true,
            soldOut: false,
            image: './images/ametyst.jpg'
        }
    ];
})();
