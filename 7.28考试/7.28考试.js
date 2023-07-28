
      new Vue({
        el: ".box",
        data: {
          arr1:[],
          arr: [
            {
              id: 1,
              img: "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2023/01/13/125/e03e7b5a-c279-4fd8-935c-476c4070109c_218x218_90.jpg",
              p: "2023春季新款甜美可拆卸蝴蝶结牛仔衬衫复古泡泡袖百搭衬衣",
              span1: "特卖价",
              span2: "￥138",
              span3: "￥899",
              span4: "1.5折",
              num: 10,
            },
            {
              id: 2,
              img: "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2023/03/16/72/ce30c090-8825-49f4-96a5-d90b538f0ddc_218x218_90.jpg",
              p: "2023夏季新款休闲宽松星星提花针织T恤女时髦百搭圆领针织衫",
              span1: "特卖价",
              span2: "￥198",
              span3: "￥799",
              span4: "2.5折",
              num: 10,
            },
            {
              id: 3,
              img: "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2023/06/12/0/c2c2e735-5d1d-4031-aa8c-8400faafb6ac_218x218_90.jpg",
              p: "2023夏季新款设计感腰线收腰V领连衣裙气质显白碎花连衣裙",
              span1: "特卖价",
              span2: "￥288",
              span3: "￥1169",
              span4: "2.5折",
              num: 10,
            },
            {
              id: 4,
              img: "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2022/05/21/151/ae85d4b0-e154-4188-ac66-32ee09e40492_218x218_90.jpg",
              p: "夏季个性撞色爱心短款半裙不对称下摆A字裙",
              span1: "特卖价",
              span2: "￥74",
              span3: "￥769",
              span4: "1.0折",
              num: 10,
            },
            {
              id: 5,
              img: "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2023/06/06/176/82812e93-41f7-41ad-b57f-81ab0c6f2ef6_218x218_90.jpg",
              p: "2023夏季新款荷叶摆抽带碎花连衣裙V领复古收腰显瘦短裙",
              span1: "特卖价",
              span2: "￥249",
              span3: "￥999",
              span4: "2.5折",
              num: 10,
            },

            {
              id: 6,
              img: "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/600875/2023/0515/98/a1da51de-675c-4769-8d96-0c37df082114_218x218_90.jpg",
              p: "2023夏季新款浪漫木耳边碎花吊带连衣裙开衩小性感长裙",
              span1: "特卖价",
              span2: "￥216",
              span3: "￥899",
              span4: "2.4折",
              num: 10,
            },
            {
              id: 7,
              img: "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2023/03/29/102/a285e839-7aa7-416f-bda5-d38f15e69d13_218x218_90.jpg",
              p: "2023夏季新款可变袖长通勤条纹衬衫裙收腰显瘦百褶连衣裙",
              span1: "特卖价",
              span2: "￥278",
              span3: "￥1199",
              span4: "2.3折",
              num: 10,
            },
            {
              id: 8,
              img: "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2023/06/06/52/5dbddddc-ff6b-4a44-aef6-5c24cdb135e1.jpg",
              p: "2023夏季新款复古洗水色口袋撞色牛仔半裙百搭不显胯A字长裙",
              span1: "特卖价",
              span2: "￥226",
              span3: "￥869",
              span4: "2.6折",
              num: 10,
            },
          ],
        },
        methods:{
          dian(data){
            let an = this.arr
            let ts;
            let wen =this.arr1
            an.forEach((item,index)=> {
              if(data == index){
                 ts = {
                  id:item.id,
                  img:item.img,
                  p:item.p,
                  num:1
                }
              }
            });
            wen.push(ts)
          },
          shan(index){
            let an = this.arr1
            an.splice(index,1)
          },
          decreaseFromArr: function() {
            if (this.arr[0].num > 0 && this.arr1[0].num <10) {
              this.arr1[0].num++;
            }
          },
          increaseToArr1(index) {
            if(this.arr1[0].num <= 1){
              this.arr1.splice(index,1)
            }else{
              this.arr1[0].num--;
            }
            
          },
        }
      });