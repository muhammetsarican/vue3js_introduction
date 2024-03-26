import { ref, watchEffect } from "vue";

export default function(){
    const searchText = ref("");
    const isTyping = ref(false);

    // watch(searchText, () => {
    //   if (searchText.value.length > 0) isTyping.value = true;

    //   setTimeout(() => {
    //     isTyping.value=false;
    //   }, 2000);
    // })

    //INFO: the watchEffect function is used to if searchText changed again clearing for the timeout func;
    const stop=watchEffect((onInvalidate) => {
      if (searchText.value.length > 0) isTyping.value = true;

      const typing=setTimeout(() => {
        isTyping.value = false;
        stop();
      }, 2000);

      onInvalidate(()=>clearTimeout(typing));
    });

    return {
        searchText,
        isTyping
    }
}