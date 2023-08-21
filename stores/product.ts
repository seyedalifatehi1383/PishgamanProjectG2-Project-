// import { defineStore } from 'pinia'

// interface Product {
//     id: number
//     title: string
//     weight: string
//     src: string
//     price: number
//     gg:string
// }

// type State = {
//   products: Product[]
// }
import { error } from 'console'
import { defineStore } from 'pinia'
import { json } from 'stream/consumers'

interface Product {
    id: number
    title: string
    weight: string
    src: string
    price: number
    gg: string 
}

interface fetch{
    id : Number
    title : string
    price :Number
    description : string
    category : string
    image : string
    rating : object
}

type State = {
  products: Product[]
  object : fetch[]
}

export const productsStore = defineStore('product', {
    state: (): State => {
        return {
            products: [
                {
                    id: 1,
                    title:'اسنک طلایی',
                    weight:' ۶۵گرم مزمز65 گرمی',
                    src: "../../public/po.jpg",
                    price: 120000,
                    gg: 'first'
                },
                {
                    id: 2,
                    title:'چیپس ماست و ریحان مزمز',
                    weight:' 60 گرمی',
                    src: "../../public/rey.jpg",
                    price: 150000,
                    gg: 'first'
                },
                {
                    id: 3,
                    title:'چیپس پیاز جعفری مزمز',
                    weight:'60گرمی',
                    src: "../../public/piz.jpg",
                    price: 150000,
                    gg: 'first'
                },
                {
                    id: 4,
                    title:'چیپس ماست و موسیر مزمز',
                    weight:'60گرمی',
                    src: "../../public/mos.jpg",
                    price: 150000,
                    gg: 'first'
                },
                {
                    id: 5,
                    title:'پاپ کرن سرکه ای مزمز',
                    weight:'60گرمی',
                    src: "../../public/pap.jpg",
                    price: 160000,
                    gg: 'first'
                },
                {
                    id: 6,
                    title:'پاپ کرن نمکی مزمز',
                    weight:'60گرمی',
                    src: "../../public/ppp.jpg",
                    price: 160000,
                    gg: 'first'
                },
                {
                    id: 7,
                    title:'چیپس لیمویی مزمز',
                    weight:'60گرمی',
                    src: "../../public/li.jpg",
                    price: 150000,
                    gg: 'first'
                },
                {
                    id: 8,
                    title:'چیپس سوپرمزمز',
                    weight:'65گرمی',
                    src: "../../public/per.jpg",
                    price: 150000,
                    gg: 'first'
                },
                {
                    id: 1,
                    title: 'انگور',
                    weight: '1کیلوگرم±50گرم',
                    src: "../../public/an.jpg",
                    price: 2200000,
                    gg: 'secound'
                },
                {
                    id: 2,
                    title: 'هلو',
                    weight: '1کیلوگرم±25گرم',
                    src: "../../public/holo.jpg",
                    price: 520000,
                    gg:'secound'
                },
                {
                    id: 3,
                    title: 'هندوانه متوسط',
                    weight: '8کیلوگرم±100گرم',
                    src: "../../public/hendan.jpg",
                    price: 520000,
                    gg: 'secound'
                },
                {
                    id: 4,
                    title: 'گلابی',
                    weight: '1کیلوگرم±50گرم',
                    src: "../../public/gol.jpg",
                    price: 1200000,
                    gg: 'secound'
                },

                {
                    id: 5,
                    title: 'شلیل',
                    weight: '1کیلوگرم±30گرم',
                    src: "../../public/shal.jpg",
                    price: 550000,
                    gg: 'secound'
                },
                {
                    id: 6,
                    title: 'موز',
                    weight: '1کیلوگرم±100گرم',
                    src: "../../public/moz.jpg",
                    price: 756000,
                    gg: 'secound'
                },
                {
                    id: 7,
                    title: 'آلو شابلونی',
                    weight: '1کیلوگرم±50گرم',
                    src: "../../public/al.jpg",
                    price: 390000,
                    gg: 'secound'
                },
                {
                    id: 8,
                    title: 'آلو زرد',
                    weight: '1کیلوگرم±50گرم',
                    src: "../../public/zard.jpg",
                    price: 390000,
                    gg: 'secound'
                },
            ],
       
        object : []
    }
    },
    actions :{
        async readp(){
            await fetch('https://fakestoreapi.com/products')
            .then(Response => Response.json())
            .then(json => this.object =json)
            .catch(error => {if (error) {
                console.log(error);
                
            }})
        },
        async readproductById( id : number){
            
            
            await fetch('https://fakestoreapi.com/products/'+id)
            .then(Response => Response.json())
            .then(json => this.object = json)
            .catch(error => {if (error) {
                console.log(error);
                
            }})
        }
    }
})