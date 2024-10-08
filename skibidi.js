function createPopup() {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const popup = document.createElement('div');
    popup.style.width = '400px';
    popup.style.backgroundColor = '#121212';
    popup.style.borderRadius = '10px';
    popup.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.9)';
    popup.style.overflow = 'hidden';
    popup.style.position = 'fixed';
    popup.style.fontFamily = '"Poppins", sans-serif';
    popup.style.color = '#E0E0E0';
    popup.style.transition = 'transform 0.3s, top 0.3s, left 0.3s';
    popup.style.zIndex = '9999';
    popup.style.resize = 'both';
    popup.style.overflow = 'auto';
    document.body.appendChild(popup);

    const storedX = localStorage.getItem('popupX');
    const storedY = localStorage.getItem('popupY');
    if (storedX && storedY) {
        popup.style.left = storedX + 'px';
        popup.style.top = storedY + 'px';
    } else {
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%) scale(1)';
    }

    const titleBar = document.createElement('div');
    titleBar.style.display = 'flex';
    titleBar.style.justifyContent = 'space-between';
    titleBar.style.alignItems = 'center';
    titleBar.style.backgroundColor = '#1E1E1E';
    titleBar.style.color = '#E0E0E0';
    titleBar.style.padding = '10px';
    titleBar.style.cursor = 'move';

    const title = document.createElement('span');
    title.innerText = 'Change Tab & Title';
    title.style.fontWeight = '600';
    titleBar.appendChild(title);

    const closeButton = document.createElement('button');
    closeButton.innerText = '✖';
    closeButton.style.backgroundColor = 'red';
    closeButton.style.color = 'white';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '50%';
    closeButton.style.width = '30px';
    closeButton.style.height = '30px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.fontSize = '18px';
    closeButton.onclick = function () {
        popup.style.transform = 'scale(0)';
        setTimeout(() => popup.remove(), 300);
    };

    closeButton.onfocus = function () { closeButton.style.outline = '2px solid #E0E0E0'; };
    closeButton.onblur = function () { closeButton.style.outline = 'none'; };

    titleBar.appendChild(closeButton);
    popup.appendChild(titleBar);

    const container = document.createElement('div');
    container.style.height = '300px';
    container.style.overflowY = 'auto';
    container.style.padding = '10px';

    const buttonData = [
    { label: 'Google Drive', title: 'Google Drive', favicon: 'https://raw.githubusercontent.com/smoressy/tab-changer-9000/refs/heads/main/icons/drive.png' },
    { label: 'Gmail', title: 'Gmail', favicon: 'https://raw.githubusercontent.com/smoressy/tab-changer-9000/refs/heads/main/icons/gmail.png' },
    { label: 'Duolingo', title: 'Duolingo', favicon: 'https://raw.githubusercontent.com/smoressy/tab-changer-9000/refs/heads/main/icons/duo.png' },
    { label: 'Zoom', title: 'Zoom', favicon: 'https://raw.githubusercontent.com/smoressy/tab-changer-9000/refs/heads/main/icons/zoom.png' },
    { label: 'Slack', title: 'Slack', favicon: 'https://raw.githubusercontent.com/smoressy/tab-changer-9000/refs/heads/main/icons/slack.png' },
    { label: 'Microsoft Teams', title: 'Microsoft Teams', favicon: 'https://raw.githubusercontent.com/smoressy/tab-changer-9000/refs/heads/main/icons/teams.png' },
    { label: 'Notion', title: 'Notion', favicon: 'https://raw.githubusercontent.com/smoressy/tab-changer-9000/refs/heads/main/icons/notion.png' },
    { label: 'Evernote', title: 'Evernote', favicon: 'https://raw.githubusercontent.com/smoressy/tab-changer-9000/refs/heads/main/icons/evernote.png' },
    { label: 'Khan Academy', title: 'Khan Academy', favicon: 'https://raw.githubusercontent.com/smoressy/tab-changer-9000/refs/heads/main/icons/khan.png' },
    { label: 'Google Classroom', title: 'Google Classroom', favicon: 'https://raw.githubusercontent.com/smoressy/tab-changer-9000/refs/heads/main/icons/googleclassroom.png' },
    { label: 'Canvas', title: 'Canvas', favicon: 'https://raw.githubusercontent.com/smoressy/tab-changer-9000/refs/heads/main/icons/canvas.png' },
    { label: 'Moodle', title: 'Moodle', favicon: 'https://raw.githubusercontent.com/smoressy/tab-changer-9000/refs/heads/main/icons/moodle.png' },
    { label: 'Quizlet', title: 'Quizlet', favicon: 'https://raw.githubusercontent.com/smoressy/tab-changer-9000/refs/heads/main/icons/quizlet.png' },
    { label: 'Trello', title: 'Trello', favicon: 'https://raw.githubusercontent.com/smoressy/tab-changer-9000/refs/heads/main/icons/trello.png' },
    { label: 'Flipgrid', title: 'Flipgrid', favicon: 'https://raw.githubusercontent.com/smoressy/tab-changer-9000/refs/heads/main/icons/flipgrid.png' },
    { label: 'Spotify', title: 'Spotify', favicon: 'https://raw.githubusercontent.com/smoressy/tab-changer-9000/refs/heads/main/icons/spotify.png' },
    { label: 'Desmos', title: 'Desmos', favicon: 'https://raw.githubusercontent.com/smoressy/tab-changer-9000/refs/heads/main/icons/desmos.png' },
    { label: 'Outlook', title: 'Outlook', favicon: 'https://raw.githubusercontent.com/smoressy/tab-changer-9000/refs/heads/main/icons/outlook.png' },
    { label: 'Onenote', title: 'Onenote', favicon: 'https://raw.githubusercontent.com/smoressy/tab-changer-9000/refs/heads/main/icons/onenote.png' },
    { label: 'SimpleMind', title: 'SimpleMind', favicon: 'https://raw.githubusercontent.com/smoressy/tab-changer-9000/refs/heads/main/icons/simplemind.png' },
    { label: 'Wolfram', title: 'Wolfram', favicon: 'https://raw.githubusercontent.com/smoressy/tab-changer-9000/refs/heads/main/icons/wolfram.png' }
    ];

    buttonData.forEach(data => {
        const button = document.createElement('button');
        button.innerText = data.label;
        button.style.width = '100%';
        button.style.marginBottom = '5px';
        button.style.padding = '10px';
        button.style.backgroundColor = '#1E1E1E';
        button.style.color = '#E0E0E0';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        button.style.fontWeight = '600';
        button.style.transition = 'transform 0.1s, background-color 0.2s';
        button.onmouseover = function () {
            button.style.backgroundColor = '#333';
        };
        button.onmouseout = function () {
            button.style.backgroundColor = '#1E1E1E';
        };
        button.onclick = function () {
            document.title = data.title;
            const existingLink = document.querySelector("link[rel='icon']");
            if (existingLink) {
                existingLink.href = data.favicon;
            } else {
                const link = document.createElement('link');
                link.rel = 'icon';
                link.href = data.favicon;
                document.head.appendChild(link);
            }
            button.style.transform = 'scale(0.98)';
            const originalText = button.innerText;
            button.innerText = 'Success';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
                button.innerText = originalText;
            }, 300);
        };
        container.appendChild(button);
    });

    container.style.scrollbarWidth = 'thin';
    container.style.scrollbarColor = '#333 #121212';
    const style = document.createElement('style');
    style.innerHTML = `::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-thumb { background-color: #333; border-radius: 10px; }`;
    document.head.appendChild(style);

    popup.appendChild(container);
    document.body.appendChild(popup);
    setTimeout(() => {
        popup.style.transform = 'scale(1)';
    }, 0);

    let offsetX, offsetY, isDragging = false;

    titleBar.onmousedown = function (e) {
        offsetX = e.clientX - popup.getBoundingClientRect().left;
        offsetY = e.clientY - popup.getBoundingClientRect().top;
        isDragging = true;

        document.onmousemove = function (e) {
            if (isDragging) {
                popup.style.left = e.clientX - offsetX + 'px';
                popup.style.top = e.clientY - offsetY + 'px';
                popup.style.transform = 'none';
            }
        };

        document.onmouseup = function () {
            if (isDragging) {
                isDragging = false;
                document.onmousemove = null;
                document.onmouseup = null;

                localStorage.setItem('popupX', popup.getBoundingClientRect().left);
                localStorage.setItem('popupY', popup.getBoundingClientRect().top);
            }
        };

        e.preventDefault();
    };
    popup.querySelector('button').focus();
}

createPopup();
