function calculateDiscountedPrice (price, discountPercentage){
    const discount=(price*discountPercentage)/100
    const priceWithDiscount = price - discount 

    return priceWithDiscount
}

const originalPrice=230
const discountPercentage=35
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage)

console.log('Original Price: $'+ originalPrice)
console.log('Discount:' + discountPercentage +'%' )
console.log('Price with discount: $' + finalPrice)