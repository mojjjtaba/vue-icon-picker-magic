import {ref} from "vue";

export function useIcons() {

    // list of font icons
    let fontIconsList = ref({
        fontawesome: {
            title: 'Font Awesome',
            url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.css',
            icons: [],
            classPrefix: 'fa-solid',
            regex: /\.fa-[a-z0-9\-]+::before/g,
            slice: { start: 1, end: -8 }
        }
    })

    // fetch all font icons
    for (let fontIconSlug in fontIconsList.value) {
        fetchFontIcon(fontIconSlug)
    }

    // Function to fetch CSS file
    function fetchFontIcon(fontIconSlug) {
        let fontIcon = fontIconsList.value[fontIconSlug];
        fetch((fontIcon.url))
            .then((response) => response.text())
            .then((cssContent) => {
                fontIconsList.value[fontIconSlug].icons = extractIconNames(cssContent, fontIcon);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    // Function to extract icon names using regex
    function extractIconNames(cssContent, fontIcon) {
        const iconNames = [];
        let match;
        while ((match = fontIcon.regex.exec(cssContent)) !== null) {
            iconNames.push(match[0].slice(fontIcon.slice.start, fontIcon.slice.end));
        }
        return iconNames;
    }

    return fontIconsList;
}