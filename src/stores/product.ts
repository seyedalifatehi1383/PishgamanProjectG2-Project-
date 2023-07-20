import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => {
    return { 
        products :[

            {title:"گوجه" ,id:"1" ,details:"سبزیجات",price:"10000" ,img:"../assets/b.jpeg"},
            {title:"برنج" ,id:"2" ,details:"خوراکی",price:"30000" ,img:"../assets/t.jpeg"},
            {title:"نان" ,id:"3" ,details:"خوراکی",price:"15000" ,img:"../assets/n.jpeg"},
            {title:"پیاز" ,id:"4" ,details:"سبزیجات",price:"56000" ,img:"../assets/p.jpeg"},
            {title:"کاهو" ,id:"5" ,details:"سبزیجات",price:"22000" ,img:"../assets/t.jpeg"},
            {title:"مایع ظرفشویی" ,id:"6" ,details:"غیر خوراکی",price:"13000" ,img:"../assets/p.jpeg"},
            {title: "خمیر دندان" ,id:"7",details:"غیر خوراکی",price:"70000" ,img:"../assets/t.jpeg"}
        ],
        buying:[],
        product:Object,
        count:0
    }
  },
  actions: {
    found(num: string){
      this.product= this.products.find((product: { id: string }) => product.id===num)
      return this.product

    },
    filtered(s1: string){
     return this.products.filter((product: { details: string }) => product.details===s1)
    },
    buy(){
        this.buying[this.count]=this.product
        this.count++
    }
  },
})