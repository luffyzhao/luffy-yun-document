<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "i-col",
        props:{
            span: [Number, String],
            order: [Number, String],
            offset: [Number, String],
            push: [Number, String],
            pull: [Number, String],
            className: String,
        },
        computed: {
            classes () {
                return [
                    `i-col`,
                    {
                        [`i-col-span-${this.span}`]: this.span,
                        [`i-col-order-${this.order}`]: this.order,
                        [`i-col-offset-${this.offset}`]: this.offset,
                        [`i-col-push-${this.push}`]: this.push,
                        [`i-col-pull-${this.pull}`]: this.pull,
                        [`${this.className}`]: !!this.className
                    }
                ];
            }
        }
    }
</script>

<style scoped>

    .i-col {
        position: relative;
        display: block;
    }
    .i-col-span-24{float:left;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}
    .i-col-span-24{display:block;width:100%}
    .i-col-push-24{left:100%}
    .i-col-pull-24{right:100%}
    .i-col-offset-24{margin-left:100%}
    .i-col-order-24{-webkit-box-ordinal-group:25;-ms-flex-order:24;order:24}
    .i-col-span-23{display:block;width:95.83333333%}
    .i-col-push-23{left:95.83333333%}
    .i-col-pull-23{right:95.83333333%}
    .i-col-offset-23{margin-left:95.83333333%}
    .i-col-order-23{-webkit-box-ordinal-group:24;-ms-flex-order:23;order:23}
    .i-col-span-22{display:block;width:91.66666667%}
    .i-col-push-22{left:91.66666667%}
    .i-col-pull-22{right:91.66666667%}
    .i-col-offset-22{margin-left:91.66666667%}
    .i-col-order-22{-webkit-box-ordinal-group:23;-ms-flex-order:22;order:22}
    .i-col-span-21{display:block;width:87.5%}
    .i-col-push-21{left:87.5%}
    .i-col-pull-21{right:87.5%}
    .i-col-offset-21{margin-left:87.5%}
    .i-col-order-21{-webkit-box-ordinal-group:22;-ms-flex-order:21;order:21}
    .i-col-span-20{display:block;width:83.33333333%}
    .i-col-push-20{left:83.33333333%}
    .i-col-pull-20{right:83.33333333%}
    .i-col-offset-20{margin-left:83.33333333%}
    .i-col-order-20{-webkit-box-ordinal-group:21;-ms-flex-order:20;order:20}
    .i-col-span-19{display:block;width:79.16666667%}
    .i-col-push-19{left:79.16666667%}
    .i-col-pull-19{right:79.16666667%}
    .i-col-offset-19{margin-left:79.16666667%}
    .i-col-order-19{-webkit-box-ordinal-group:20;-ms-flex-order:19;order:19}
    .i-col-span-18{display:block;width:75%}
    .i-col-push-18{left:75%}
    .i-col-pull-18{right:75%}
    .i-col-offset-18{margin-left:75%}
    .i-col-order-18{-webkit-box-ordinal-group:19;-ms-flex-order:18;order:18}
    .i-col-span-17{display:block;width:70.83333333%}
    .i-col-push-17{left:70.83333333%}
    .i-col-pull-17{right:70.83333333%}
    .i-col-offset-17{margin-left:70.83333333%}
    .i-col-order-17{-webkit-box-ordinal-group:18;-ms-flex-order:17;order:17}
    .i-col-span-16{display:block;width:66.66666667%}
    .i-col-push-16{left:66.66666667%}
    .i-col-pull-16{right:66.66666667%}
    .i-col-offset-16{margin-left:66.66666667%}
    .i-col-order-16{-webkit-box-ordinal-group:17;-ms-flex-order:16;order:16}
    .i-col-span-15{display:block;width:62.5%}
    .i-col-push-15{left:62.5%}
    .i-col-pull-15{right:62.5%}
    .i-col-offset-15{margin-left:62.5%}
    .i-col-order-15{-webkit-box-ordinal-group:16;-ms-flex-order:15;order:15}
    .i-col-span-14{display:block;width:58.33333333%}
    .i-col-push-14{left:58.33333333%}
    .i-col-pull-14{right:58.33333333%}
    .i-col-offset-14{margin-left:58.33333333%}
    .i-col-order-14{-webkit-box-ordinal-group:15;-ms-flex-order:14;order:14}
    .i-col-span-13{display:block;width:54.16666667%}
    .i-col-push-13{left:54.16666667%}
    .i-col-pull-13{right:54.16666667%}
    .i-col-offset-13{margin-left:54.16666667%}
    .i-col-order-13{-webkit-box-ordinal-group:14;-ms-flex-order:13;order:13}
    .i-col-span-12{display:block;width:50%}
    .i-col-push-12{left:50%}
    .i-col-pull-12{right:50%}
    .i-col-offset-12{margin-left:50%}
    .i-col-order-12{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}
    .i-col-span-11{display:block;width:45.83333333%}
    .i-col-push-11{left:45.83333333%}
    .i-col-pull-11{right:45.83333333%}
    .i-col-offset-11{margin-left:45.83333333%}
    .i-col-order-11{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}
    .i-col-span-10{display:block;width:41.66666667%}
    .i-col-push-10{left:41.66666667%}
    .i-col-pull-10{right:41.66666667%}
    .i-col-offset-10{margin-left:41.66666667%}
    .i-col-order-10{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}
    .i-col-span-9{display:block;width:37.5%}
    .i-col-push-9{left:37.5%}
    .i-col-pull-9{right:37.5%}
    .i-col-offset-9{margin-left:37.5%}
    .i-col-order-9{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}
    .i-col-span-8{display:block;width:33.33333333%}
    .i-col-push-8{left:33.33333333%}
    .i-col-pull-8{right:33.33333333%}
    .i-col-offset-8{margin-left:33.33333333%}
    .i-col-order-8{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}
    .i-col-span-7{display:block;width:29.16666667%}
    .i-col-push-7{left:29.16666667%}
    .i-col-pull-7{right:29.16666667%}
    .i-col-offset-7{margin-left:29.16666667%}
    .i-col-order-7{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}
    .i-col-span-6{display:block;width:25%}
    .i-col-push-6{left:25%}
    .i-col-pull-6{right:25%}
    .i-col-offset-6{margin-left:25%}
    .i-col-order-6{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}
    .i-col-span-5{display:block;width:20.83333333%}
    .i-col-push-5{left:20.83333333%}
    .i-col-pull-5{right:20.83333333%}
    .i-col-offset-5{margin-left:20.83333333%}
    .i-col-order-5{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}
    .i-col-span-4{display:block;width:16.66666667%}
    .i-col-push-4{left:16.66666667%}
    .i-col-pull-4{right:16.66666667%}
    .i-col-offset-4{margin-left:16.66666667%}
    .i-col-order-4{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}
    .i-col-span-3{display:block;width:12.5%}
    .i-col-push-3{left:12.5%}
    .i-col-pull-3{right:12.5%}
    .i-col-offset-3{margin-left:12.5%}
    .i-col-order-3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}
    .i-col-span-2{display:block;width:8.33333333%}
    .i-col-push-2{left:8.33333333%}
    .i-col-pull-2{right:8.33333333%}
    .i-col-offset-2{margin-left:8.33333333%}
    .i-col-order-2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}
    .i-col-span-1{display:block;width:4.16666667%}

    .i-col-span-1, .i-col-span-2, .i-col-span-3, .i-col-span-4, .i-col-span-5, .i-col-span-6, .i-col-span-7, .i-col-span-8, .i-col-span-9, .i-col-span-10, .i-col-span-11, .i-col-span-12, .i-col-span-13, .i-col-span-14, .i-col-span-15, .i-col-span-16, .i-col-span-17, .i-col-span-18, .i-col-span-19, .i-col-span-20, .i-col-span-21, .i-col-span-22, .i-col-span-23, .i-col-span-24 {
        float: left;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    }

</style>