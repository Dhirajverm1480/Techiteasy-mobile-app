export type Product = {
  _id: string
  title: string
  price: number
  thumbnail: string
  description: string
}

export type ProductResponse = {
  products: Product[]
}