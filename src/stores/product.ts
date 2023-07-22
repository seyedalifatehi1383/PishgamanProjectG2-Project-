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
            {title: "خمیر دندان" ,id:"7",details:"غیر خوراکی",price:"70000" ,img:"../assets/t.jpeg"},
            {title:"پنیر" ,id:"1" ,details:"خوراکی",price:"10000" ,img:"../assets/b.jpeg"},
            {title:"کیک" ,id:"2" ,details:"خوراکی",price:"30000" ,img:"../assets/t.jpeg"},
            {title:"مربا" ,id:"3" ,details:"خوراکی",price:"15000" ,img:"../assets/n.jpeg"},
            {title:"سیب زمینی" ,id:"4" ,details:"سبزیجات",price:"56000" ,img:"../assets/p.jpeg"},
            {title:"کلم" ,id:"5" ,details:"سبزیجات",price:"22000" ,img:"../assets/t.jpeg"},
            {title:"کیف" ,id:"6" ,details:"غیر خوراکی",price:"13000" ,img:"../assets/p.jpeg"},
            {title: "میز" ,id:"7",details:"غیر خوراکی",price:"70000" ,img:"../assets/t.jpeg"}
        ],

        buying:[],
        
        cities: [
          {
            id: 1,
            title: "تهران",
            name: "tehran",
            link: "/tehran"
        },
    
        {
            id: 2,
            title: "یزد",
            name: "yazd",
            link: "/yazd"
        },
    
        {
            id: 3,
            title: "اصفهان",
            name: "isfahan",
            link: "/isfahan"
        },
    
        {
            id: 4,
            title: "کرمان",
            name: "kerman",
            link: "/kerman"
        },
    
        {
            id: 5,
            title: "کرج",
            name: "karaj",
            link: "/karaj"
        },
    
        {
            id: 6,
            title: "مشهد",
            name: "mashhad",
            link: "/mashhad"
        },
    
        {
            id: 7,
            title: "شیراز",
            name: "shiraz",
            link: "/shiraz"
        },
    
        {
            id: 8,
            title: "ارومیه",
            name: "urumiyeh",
            link: "/urumiyeh"
        },
    
        {
            id: 9,
            title: "اهواز",
            name: "ahvaz",
            link: "/ahvaz"
        },
    
        {
            id: 10,
            title: "کرمانشاه",
            name: "kermanshah",
            link: "/kermanshah"
        },
    
        {
            id: 11,
            title: "تبریز",
            name: "tabriz",
            link: "/tabriz"
        },
    
        {
            id: 12,
            title: "سنندج",
            name: "sanandaj",
            link: "/sanandaj"
        },
    
        {
            id: 13,
            title: "گرگان",
            name: "gorgan",
            link: "/gorgan"
        },
    
        {
            id: 14,
            title: "قم",
            name: "qom",
            link: "/qom"
        },
    
        {
            id: 15,
            title: "بندرعباس",
            name: "bandarabbas",
            link: "/bandarabbas"
        },
    
        {
            id: 16,
            title: "رشت",
            name: "rasht",
            link: "/rasht"
        },
    
        {
            id: 17,
            title: "زاهدان",
            name: "zahedan",
            link: "/zahedan"
        },
    
        {
            id: 18,
            title: "سمنان",
            name: "semnan",
            link: "/semnan"
        },
    
        {
            id: 19,
            title: "بجنورد",
            name: "bojnourd",
            link: "/bojnourd"
        },
    
        {
            id: 20,
            title: "یاسوج",
            name: "yasouj",
            link: "/yasouj"
        },
    
        {
            id: 21,
            title: "شهرکرد",
            name: "shahrekord",
            link: "/shahrekord"
        },
    
        {
            id: 22,
            title: "کاشان",
            name: "kashan",
            link: "/kashan"
        },
    
        {
            id: 23,
            title: "لواسان",
            name: "lavasan",
            link: "/lavasan"
        },
    
        {
            id: 24,
            title: "ایلام",
            name: "ilam",
            link: "/ilam"
        },
    
        {
            id: 25,
            title: "قزوین",
            name: "qazvin",
            link: "/qazvin"
        },
    
        {
            id: 26,
            title: "اراک",
            name: "arak",
            link: "/arak"
        },
    
        {
            id: 27,
            title: "اردبیل",
            name: "ardabil",
            link: "/ardabil"
        },
    
        {
            id: 28,
            title: "همدان",
            name: "hamedan",
            link: "/hamedan"
        },
    
        {
            id: 29,
            title: "ساری",
            name: "sari",
            link: "/sari"
        },
    
        {
            id: 30,
            title: "زنجان",
            name: "zanjan",
            link: "/zanjan"
        },
    
        {
            id: 31,
            title: "بوشهر",
            name: "boushehr",
            link: "/boushehr"
        },
    
        {
            id: 32,
            title: "بیرجند",
            name: "birjand",
            link: "/birjand"
        },
    
        {
            id: 33,
            title: "خرم آباد",
            name: "khorramabad",
            link: "/khorramabad"
        },
    
        {
            id: 34,
            title: "بهمئی",
            name: "behmaei",
            link: "/behmaei"
        },
    
        {
            id: 35,
            title: "گچساران",
            name: "gachsaran",
            link: "/gachsaran"
        },
    
        {
            id: 36,
            title: "دهدشت",
            name: "dehdasht",
            link: "/dehdasht"
        },
    
        {
            id: 37,
            title: "گلبهار, چناران",
            name: "golbahar",
            link: "/golbahar"
        },
    
        {
            id: 38,
            title: "طرقبه, شاندیز",
            name: "shandiz",
            link: "/shandiz"
        },
    
        {
            id: 39,
            title: "فریمان",
            name: "fariman",
            link: "/fariman"
        },
    
        {
            id: 40,
            title: "ملک آباد, بینالود",
            name: "malekabad",
            link: "/malekabad"
        }
        ],

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