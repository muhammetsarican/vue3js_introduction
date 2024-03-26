import { ref } from "vue";

export default function() {
    const toggle = ref(false);
    const toggleParagraph = () => {
        toggle.value = !toggle.value;
    };

    return {
        toggle,
        toggleParagraph
    }
}