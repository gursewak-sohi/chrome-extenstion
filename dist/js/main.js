(function() {

    // Toggle Checkbox
    const toggler = (togglerID) => {
        let toggleLink = document.querySelector(togglerID);
        if (toggleLink) {
            toggleLink.onclick = () => {
                let ariaChecked = toggleLink.getAttribute('aria-checked');
                console.log(ariaChecked);
                if (ariaChecked == 'true') {
                    toggleLink.setAttribute("aria-checked", false);
                    toggleLink.classList.add("bg-gray-200");
                    toggleLink.classList.remove('bg-indigo-600');
                    toggleLink.querySelector('span').classList.add('translate-x-0');
                    toggleLink.querySelector('span').classList.remove('switch-on');
                } else {
                    toggleLink.setAttribute("aria-checked", true);
                    toggleLink.classList.remove("bg-gray-200");
                    toggleLink.classList.add('bg-indigo-600');
                    toggleLink.querySelector('span').classList.remove('translate-x-0');
                    toggleLink.querySelector('span').classList.add('switch-on');
                }
            }
        }
    }
    toggler('#togglerBtn');


    // Copy Text
    const copyText = (btnID, messageID) => {
        let copyLink = document.querySelector(btnID),
            messageItem = document.querySelector(messageID);
        if (copyLink && messageItem) {
            copyLink.onclick = () => {
                messageItem.classList.remove('opacity-0');
                messageItem.classList.remove('scale-95');
                messageItem.classList.remove('translate-y-1');
                setTimeout(() => {
                    messageItem.classList.add('opacity-0');
                    messageItem.classList.add('scale-95');
                    messageItem.classList.add('translate-y-1');
                }, 1000);
            }
        }
    }
    copyText('#copyBtn', '#copyMessage');

    // Open Modal
    const openModal = (btnID, modalID, contentID) => {
        let modalLink = document.querySelector(btnID),
            modalItem = document.querySelector(modalID),
            contentItem = document.querySelector(contentID);
        if (modalLink && modalItem && contentItem) {
            modalLink.onclick = (e) => {
                e.stopPropagation();
                modalItem.classList.remove('opacity-0');
                modalItem.classList.remove('invisible');
                contentItem.classList.remove('opacity-0');
                contentItem.classList.remove('translate-y-4');
                contentItem.classList.remove('scale-95');
            }
            contentItem.onclick = (e) => {
                e.stopPropagation();
            }
        }
    }
    openModal('#modalBtn', '#modal', "#modalContent");


    // Close Modal
    const closeModal = (btnID, modalID, contentID) => {
        let closeLink = document.querySelector(btnID),
            modalItem = document.querySelector(modalID),
            contentItem = document.querySelector(contentID);
        if (closeLink && modalItem) {
            closeLink.onclick = () => {
                modalItem.classList.add('opacity-0');
                modalItem.classList.add('invisible');
                contentItem.classList.add('opacity-0');
                contentItem.classList.add('translate-y-4');
                contentItem.classList.add('scale-95');
            }
            document.onclick = () => {
                modalItem.classList.add('opacity-0');
                modalItem.classList.add('invisible');
                contentItem.classList.add('opacity-0');
                contentItem.classList.add('translate-y-4');
                contentItem.classList.add('scale-95');
            }
        }
    }
    closeModal('#closeBtn', '#modal', '#modalContent');



})();