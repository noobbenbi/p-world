<template>
    <div>CC</div>
</template>
<script>

        let a = 1;
        var b = 1;
    
export default {
    name:'about',
    data(){
        return {

        }
    },
    methods:{
        letTest(){
            var a = [];
            for(var i = 0;i < 10;i++){
                a[i] = function() {
                    console.log(i);
                }
            }
            a[6]();
        },
        letTest1(){
            var a = [];
            for(let i = 0;i < 10;i++){
                a[i] = function() {
                    console.log(i);
                }
            }
            a[6]();
        },
        letTest2(){
           let n = 1;
           {
               let n = 2;
               console.log('内部的'+n);
           }
            console.log('外部的：'+n);
        },
        letTest3(){
           let {length : l} = 'abcdefg'
           console.log(l);
        },
    },
    created(){
        this.letTest();
        this.letTest1();
        this.letTest2();
        this.letTest3()
    }
}
</script>

<style lang="stylus" scoped>

</style>