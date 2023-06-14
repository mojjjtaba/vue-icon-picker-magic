import {ref} from "vue";

export function useIcons() {

    // list of font icons
    let fontIconsList = ref({
        fontawesome: {
            title: 'Font Awesome',
            url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.css',
            icons: [],
            regex: /\.fa-[a-z0-9\-]+::before/g,
            slice: { start: 1, end: -8 }
        },
        lineawesome: {
            title: 'Line Awesome',
            url: 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.css',
            icons: [],
            regex: /\.la-[a-z0-9\-]+:before/g,
            slice: { start: 1, end: -7 }
        }
    })

    // fetch all font icons
    for (let fontIconSlug in fontIconsList.value) {
        fetchFontIcon(fontIconSlug)
    }

    // Function to fetch CSS file
    function fetchFontIcon(fontIconSlug) {
        let fontIcon = fontIconsList.value[fontIconSlug];
        fetch(fontIcon.url)
            .then((response) => response.text())
            .then((cssContent) => {
                fontIconsList.value[fontIconSlug].icons = extractIconNames(cssContent);
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