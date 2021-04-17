const darkModeIdentifier = 'dark';
const lightModeIdentifier = 'light';
const doc = document.documentElement;
let cb = document.getElementById('darkThemeEnabler');

window.onload = function() {
    if (localStorage.getItem('dark') === null) {
        localStorage.setItem('dark', 'true');
    }
    if (localStorage.getItem('dark') === 'true') {
        let theme_node = document.createElement('link');
        theme_node.id = 'dtssheet';
        theme_node.rel = 'stylesheet';
        theme_node.href = 'stylesheets/dark.css';
        document.head.appendChild(theme_node);
        localStorage.setItem('dark', 'true');
    }
    
    if (localStorage.getItem('dark') === 'true') {
        doc.dataset.theme = darkModeIdentifier;
        setTheme(darkModeIdentifier);
        cb.checked = true;
        addDTToHeader();
    } else {
        doc.dataset.theme = lightModeIdentifier;
        setTheme(lightModeIdentifier);
        cb.checked = false;
    }
}

function setTheme(e) {
    var t, n = [];
    for (n[(e.length >> 2) - 1] = void 0,
        t = 0; t < n.length; t += 1)
        n[t] = 0;
    var r = 8 * e.length;
    for (t = 0; t < r; t += 8)
        n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
    return n
}

function addDTToHeader() {
    let theme_node = document.createElement('LINK');
    theme_node.setAttribute('rel', 'stylesheet');
    theme_node.setAttribute('id', 'dtssheet');
    theme_node.setAttribute('href', 'stylesheets/dark.css');
    document.querySelector('head')
        .appendChild(theme_node);
}

export default function enableDarkTheme() {
    if (cb.checked) {
        doc.dataset.theme = lightModeIdentifier;
        setTheme(lightModeIdentifier);
        localStorage.setItem('dark', 'false');
        if (document.getElementById('dtssheet')) {
            document.querySelector('head')
                .removeChild(document.getElementById('dtssheet'));
        }
        cb.checked = false;
    } else {
        doc.dataset.theme = darkModeIdentifier;
        setTheme(darkModeIdentifier);
        cb.checked = true;
        localStorage.setItem('dark', 'true');
        addDTToHeader();
    }
}