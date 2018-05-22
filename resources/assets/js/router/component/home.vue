<template>
    <div class="layout">
        <div class="layout-header">
            <i-row>
                <i-col :span="12">
                    <div class="layout-header-logo"></div>
                </i-col>
                <i-col :span="12" style="text-align: right;">
                    <dropdown>
                        我的好朋友
                        <div slot="list">
                            <dropdown-item>小华</dropdown-item>
                            <dropdown-item>小华</dropdown-item>
                            <dropdown-item>小华</dropdown-item>
                            <dropdown-item>小华</dropdown-item>
                        </div>
                    </dropdown>
                </i-col>
            </i-row>
        </div>
        <router-view></router-view>
        <div class="layout-footer">

        </div>
    </div>
</template>

<script>
    import IRow from "@/views/components/IRow";
    import ICol from "@/views/components/ICol";
    import Dropdown from "@/views/components/dropdown";
    import DropdownItem from "@/views/components/dropdown-item";

    export default {
        components: {
            DropdownItem,
            Dropdown,
            ICol,
            IRow},
        name: "home",
        methods: {
        }
    }
</script>

<style scoped>

</style>