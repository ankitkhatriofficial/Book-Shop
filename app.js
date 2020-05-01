// This is varible for the Page index.html
var BookCart = angular.module("BookCart", ["ngRoute", "ngAnimate"]);

//This is the Routing Configuration for the Book and Cart View
BookCart.config(function ($routeProvider) {
    $routeProvider
        .when("/books", {
            templateUrl: "partials/book-list.html",
            controller: "BookListCtrl"
        })
        .when("/cart", {
            templateUrl: "partials/cart-list.html",
            controller: "CartListCtrl"
        })
        .otherwise({
            redirectTo: "/books"
        })
});

// This is the Controller for header Section
BookCart.controller("HeaderCtrl", function ($scope, $location) {
    $scope.appDetails = {};
    $scope.appDetails.title = "Book Shop";
    $scope.appDetails.tagline = "We have huge collection of books";

    $scope.nav = {};
    $scope.nav.isActive = function (path) {
        if (path === $location.path) {
            console.log($location.path);
            return true;
        }
        return false;
    }
});

// This is the Controller for Book List Section
BookCart.controller("BookListCtrl", function ($scope, BookService, CartService) {
    $scope.books = BookService.getBooks();
    $scope.addToCart = function (book) {
        CartService.addToCart(book);
    }
});

// This is the Controller for the Cart Section 
BookCart.controller("CartListCtrl", function ($scope, CartService) {
    $scope.cart = CartService.getCart();
    $scope.buy = function (book) {
        CartService.buy(book);
    }
});

//This is the Service for Add to Cart 
BookCart.factory("BookService", function () {
    var books = [
        {
            index: 0,
            link: "https://drive.google.com/file/d/1RfBbRiy4jrAw7nfot4ylDiW-Hh6VdmXN/view",
            imgUrl: "half_girlfriend.jpg",
            name: "Half Girlfriend",
            price: 400,
            rating: 4.6,
            author: "Chetan Bhagat",
            releaseDate: "01 - 10 - 2014",
            details: "Half Girlfriend is an Indian English coming of age, young adult romance novel by Indian author Chetan Bhagat. The novel, set in rural Bihar, New Delhi, Patna, and New York, is the story of a Bihari boy in quest of winning over the girl he loves. This is Bhagat's sixth novel which was released on 1 October 2014 by Rupa Publications. The novel has also been published in Hindi and Gujarati versions as well."
        },
        {
            index: 1,
            link: "https://openlibrary.org/works/OL12567963W/Middle_Game",
            imgUrl: "middle_game.jpg",
            name: "Middle Game",
            price: 199,
            rating: 4.3,
            author: "Seanan McGuire",
            releaseDate: "07 - 05 - 2019",
            details: "Lorem ipsum dolor sit amet confectetur adipisicing elit. Quis, quam molestias voluptas adipisci possimus, consectetur dicta magnam nulla minima alias id nisi officiis suscipit fuga explicabo, eum rerum? A, accusamus!"
        },
        {
            index: 2,
            link: "https://arxiv.org/pdf/1901.05639.pdf",
            imgUrl: "artifical_neural_network.jpg",
            name: "Artificial Neural Networks",
            price: 445,
            rating: 4.1,
            author: "Bernhard Mehlig",
            releaseDate: "01 - 02 - 2019",
            details: "Artificial Neural Networks (ANN) are state-of-the-art, trainable algorithms that emulate certain major aspects in the functioning of the human brain. This gives them a unique, self-training ability, the ability to formalize unclassified information and, most importantly, the ability to make forecasts based on the historical information they have at their disposal."
        },
        {
            index: 3,
            link: "https://drive.google.com/file/d/1GpFyzzl2wZk0Tv1s0Ry-AQXoX_LnZIOd/view",
            imgUrl: "Five_point_someone.jpg",
            name: "Five Point Someone",
            price: 350,
            rating: 3.9,
            author: "Chetan Bhagat",
            releaseDate: "01 - 01 - 2014",
            details: "‘Five Point Someone: What Not To Do at IIT’ is the debut narrative by renowned author Chetan Bhagat. The plot rotates around 3 friends Hari, Ryan and Alok at IIT. Their companionship is strengthened into close bond during their years at IIT, experiencing extreme hardship to endure through the tough competitions. Three of them have high self-expectations of being at the top in their classes and graduate out of the Institution with flying colours."
        },
        {
            index: 4,
            link: "https://www.syncfusion.com/ebooks/confirmation/webservers",
            imgUrl: "web_servers_succinctly.jpg",
            name: "Web Servers Succinctly",
            price: 999,
            rating: 4.6,
            author: "Marc Clifton",
            releaseDate: "30 - 06 - 2015",
            details: "The concept of a web server has become fuzzy because the server is now entwined with the dynamic requirements of web applications. Handling a request is no longer the simple process of send back the content of this file, but instead involves routing the request to the web application, which, among other things, determines where the content comes from."
        }
    ];

    return {
        getBooks: function () {
            return books;
        }
    }
});

//This is the Service for Purchase books(Buy)
BookCart.factory("CartService", function () {
    var cart = [];
    return {
        getCart: function () {
            return cart;
        },
        addToCart: function (book) {
            cart.push(book);
            alert(book.name + " added to Cart");
        },
        buy: function (book) {
            alert("Thanks for purchasing: " + book.name);
            cart.splice(book.index, 1);
            window.open(book.link, "_blank");
        }
    }
});
