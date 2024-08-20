<template>
    <div class="sponsor-container">
        <div class="sponsor-title">
            <h3>Our sponsors</h3>
        </div>
        <div class="sponsors">
            <a
                v-for="sponsor in sponsors"
                :key="sponsor.name"
                :href="sponsor.url"
                :title="sponsor.name"
                target="_blank"
                rel="noopener noreferrer"
                class="sponsor"
            >
                <img :src="sponsor.image" :alt="sponsor.name" width="300" height="100"
                    :style="{backgroundColor: sponsor.backgroundColor}" />
            </a>
        </div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			sponsors: [
				{
					name: "Sponsor 1",
					image: "",
                    url: "#",
                    backgroundColor: "#fff",
				},
			],
		};
	},
};
</script>

<style scoped>
.sponsor-container {
    margin-top: 2em;
}

.sponsor-title h3 {
    font-size: .90rem;
    font-weight: 600;
    text-align: center;
    color: var(--vp-c-text-2);
    margin-bottom: 1em;
}

.sponsors {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.sponsor {
	border-radius: 12px;
	transition: all 0.2s ease;
	overflow: hidden;
    width: 100%;
    aspect-ratio: 3 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sponsor img {
	object-fit: contain;
	object-position: center;
    height: 100%;
}

.sponsor:hover {
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
