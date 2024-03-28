<template>
    <div class="container">
        <slot name="title"></slot>
        <hr>
        <p class="text-green my-2">
            <slot name="body"/>

        </p>
        <p><b><slot /></b></p>
        <hr>
        <div class="d-flex justify-content-end">
            <button>Kapat</button>
            <button class="green">Kaydet</button>
        </div>
    </div>
</template>