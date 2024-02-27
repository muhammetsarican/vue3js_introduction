<template>
    <AppHeader />
    <div class="flex flex-row">
        <Sidebar />
        <BookmarkList />
    </div>
</template>
<script>
import Sidebar from "@/components/home/SidebarComp"
export default{
    components:{
        Sidebar
    }
}
</script>