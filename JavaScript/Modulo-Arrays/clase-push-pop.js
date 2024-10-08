// Methods that modify the original array(Mutability)

//push()

const countries = ['Chinese', 'Germany', 'Spain', 'Turkey']
const newCountries = countries.push('Poland', 'Austria')

console.log(countries)
console.log(newCountries)

//pop()

const removedContry = countries.pop()

console.log(countries)
console.log(removedContry)


//exercise
let bookCart = []

const ADD_TO_CART_ACTION = 'addToCart'
const REMOVE_FROM_CART_ACTION = 'removeFromCart'
const VIEW_CART_ACTION = 'viewCart'

function viewCart() {
    console.log('Current Cart of Books: ', bookCart)
}

function performCartActions(action, newBook) {
    switch (action) {
        case ADD_TO_CART_ACTION:
            bookCart.push(newBook)
            break;
        case REMOVE_FROM_CART_ACTION:
            if (bookCart.length === 0) {
                console.log('Cart is empty. No books to remove.')
            } else {
                const removedBook = bookCart.pop()
                console.log(`Removed book from the cart: ${removedBook}`)
            }
            break;
        case VIEW_CART_ACTION:
            viewCart()
            break;
        default:
            console.log('Invalid action. Please choose a vaid option.')
    }
}

performCartActions(ADD_TO_CART_ACTION, 'Think like a moon')
performCartActions(VIEW_CART_ACTION)
performCartActions(ADD_TO_CART_ACTION, 'Ego is the enemy.')
performCartActions(VIEW_CART_ACTION)
performCartActions(REMOVE_FROM_CART_ACTION)