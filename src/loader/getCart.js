import { getStoredCart } from "../utility/FakeData"

  const cartAndProductData = async () =>{
   
   const productsData = await fetch("/jobsData.json")
   const products = await productsData.json()
   const savedCart = getStoredCart()
   let cartArray = []
   for(const id in savedCart){
    const foundProduct = products.find(product => product.id == id)
    if(foundProduct){
        foundProduct.quantity = savedCart[id]
        cartArray.push(foundProduct)

    }
   }
   return cartArray
}

export {cartAndProductData}
