<template>
    <div v-if="showModal" class="discord-modal">
    <div class="modal-overlay"></div>
    <div class="modal-content">
        <button @click="closeModal" class="close-btn">×</button>
        <h2>Habitmaxx Discord</h2>
        <p>Please before continuing, quickly join our <b>community</b> server</p>
        <div class="button-group">
        <a target="_blank" :href="DISCORD_INVITE" @click="joinDiscord" class="join-btn">Join</a>
        <button @click="closeModal" class="close-btn-bottom">Close</button>
        </div>
    </div>
    </div>
</template>

<script setup>
import { DISCORD_INVITE } from '../../../../consts'
import { ref, onMounted } from 'vue'

const showModal = ref(false)

const setCookie = (name, value, days) => {
    const date = new Date()
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
    const expires = "; expires=" + date.toUTCString()
    document.cookie = name + "=" + (value || "") + expires + "; path=/"
}

const getCookie = (name) => {
    const nameEQ = name + "="
    const ca = document.cookie.split(';')
    for (const element of ca) {
    let c = element
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
    }
    return null
}

const closeModal = () => {
    showModal.value = false
    setCookie('discord_modal_closed', 'true', 1)
}

const joinDiscord = () => {
    showModal.value = false
    setCookie('discord_modal_joined', 'true', 14)
}

onMounted(() => {
    const modalClosed = getCookie('discord_modal_closed')
    const modalJoined = getCookie('discord_modal_joined')

    if (!modalClosed && !modalJoined) {
    showModal.value = true
    }
})
</script>

<style scoped>
.modal-content h2 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: var(--vp-c-text-1);
    font-weight: 600;

}
.discord-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
    max-width: 380px;
    background-color: var(--vp-c-bg);
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    position: relative;
    color: var(--vp-c-text-1);
    z-index: 1001;
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--vp-c-text-2);
}

.button-group {
    margin-top: 1rem;
}

.join-btn, .close-btn-bottom {
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.join-btn {
    background-color: var(--vp-c-brand-3);
    color: var(--vp-c-text-inverse-1);
    text-decoration: none;
}

.close-btn-bottom {
    background-color: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
}
</style>
