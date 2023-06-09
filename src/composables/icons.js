import {ref} from "vue";

export function useIcons() {

    // list of font icons
    let fontIconsList = ref({
        fontawesome: {
            title: 'Font Awesome',
            url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.css',
            icons: []
        }
    })

    // fetch all font icons
    for (let fontIconSlug in fontIconsList.value) {
        fetchFontIcon(fontIconSlug)
    }

    // Function to fetch CSS file
    function fetchFontIcon(fontIconSlug) {
        fetch(fontIconsList.value[fontIconSlug].url)
            .then((response) => response.text())
            .then((cssContent) => {
                fontIconsList.value[fontIconSlug].icons = extractIconNames(cssContent);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    // Function to extract icon names using regex
    function extractIconNames(cssContent) {
        const regex = /\.fa-[a-z0-9\-]+::before/g;
        const iconNames = [];
        let match;
        while ((match = regex.exec(cssContent)) !== null) {
            iconNames.push(match[0].slice(1, -8));
        }
        return iconNames;
    }

    return fontIconsList;
}