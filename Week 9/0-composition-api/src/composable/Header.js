import {ref, watch} from "vue";

export default function(){
    const title = ref("Hello Composition Api");
    const titleLength=ref(title.value.length);
    watch(title, ()=>titleLength.value=title.value.length);

    return {
        title, titleLength
    }
}