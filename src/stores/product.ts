import { defineStore } from 'pinia'

interface Product{
  title:string
  id:string
  details:string
  price:string
  img:string
}

type State = {
  products: Product[],
  product?: Product,
  buying?: Product[],
  count: number
}

export const useProductStore = defineStore('product', {
  state: (): State => {
    return { 
        products:[

            {title:"گوجه" ,id:"1" ,details:"سبزیجات",price:"10000" ,img:"../assets/b.jpeg"},
            {title:"برنج" ,id:"2" ,details:"خوراکی",price:"30000" ,img:"../assets/t.jpeg"},
            {title:"نان" ,id:"3" ,details:"خوراکی",price:"15000" ,img:"../assets/n.jpeg"},
            {title:"پیاز" ,id:"4" ,details:"سبزیجات",price:"56000" ,img:"../assets/p.jpeg"},
            {title:"کاهو" ,id:"5" ,details:"سبزیجات",price:"22000" ,img:"../assets/t.jpeg"},
            {title:"مایع ظرفشویی" ,id:"6" ,details:"غیر خوراکی",price:"13000" ,img:"../assets/p.jpeg"},
            {title: "خمیر دندان" ,id:"7",details:"غیر خوراکی",price:"70000" ,img:"../assets/t.jpeg"},
            {title:"پنیر" ,id:"8" ,details:"خوراکی",price:"10000" ,img:"../assets/b.jpeg"},
            {title:"کیک" ,id:"9" ,details:"خوراکی",price:"30000" ,img:"../assets/t.jpeg"},
            {title:"مربا" ,id:"10" ,details:"خوراکی",price:"15000" ,img:"../assets/n.jpeg"},
            {title:"سیب زمینی" ,id:"11" ,details:"سبزیجات",price:"56000" ,img:"../assets/p.jpeg"},
            {title:"کلم" ,id:"12" ,details:"سبزیجات",price:"22000" ,img:"../assets/t.jpeg"},
            {title:"کیف" ,id:"13" ,details:"غیر خوراکی",price:"13000" ,img:"../assets/p.jpeg"},
            {title: "میز" ,id:"14",details:"غیر خوراکی",price:"70000" ,img:"../assets/t.jpeg"}
        ],
        buying:[],
        count:0
    }
  },
  actions: {
    found(num: string){
      this.product = this.products.find((product: { id: string }) => product.id===num)
      return this.product

    },
    filtered(s1: string){
     return this.products.filter((product: { details: string }) => product.details===s1)
    },
    buy(){
        this.buying[this.count]=this.product
        this.count++
    }, 
     removed(id:string){
      this.buying  =  this.buying.filter((product: { id: string }) => product.id!==id)
      this.count--
     }
  },
})