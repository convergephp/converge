import ClipboardJS from "clipboard/dist/clipboard";

export default () => ({
    codeBlocks: document.querySelectorAll("pre") || [],
    clipboardIcon: `<svg class="w-6 h-6 fill-base-300 transition hidden group-hover:!block absolute z-30 top-3 right-3 cursor-pointer" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path></svg>`,
    clipboardCopiedIcon: `<svg class="w-6 h-6 transition absolute z-30 top-3 right-3 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path></svg>`,
    init() {
        this.codeBlocks.forEach((element, key) => {
            const wrapper = document.createElement("div");

            ["relative", "code-block-wrapper" , "group"].forEach((value) =>
                wrapper.classList.add(value)
            );

            element.parentNode.insertBefore(wrapper, element);

            wrapper.appendChild(element);

            let copyToClipboardButton = document.createElement("button");
            copyToClipboardButton.innerHTML = this.clipboardIcon;
            copyToClipboardButton.id = `code-block-copy-button-${key}`;
            ["md:block", "hidden"].forEach((value) =>
                copyToClipboardButton.classList.add(value)
            );

            copyToClipboardButton.setAttribute(
                "aria-label",
                "Copy to Clipboard"
            );
            copyToClipboardButton.setAttribute("title", "Copy to Clipboard");
            copyToClipboardButton.classList.add("code-block-copy-button","text-primary");

            wrapper.appendChild(copyToClipboardButton);

            let copyToClipboard = new ClipboardJS(
                `#${copyToClipboardButton.id}`
            );
            copyToClipboard.on("success", (element) => {
                copyToClipboardButton.innerHTML = this.clipboardCopiedIcon;
                element.clearSelection();
                setTimeout(
                    () =>
                        (copyToClipboardButton.innerHTML = this.clipboardIcon),
                    1500
                );
            });

            element.id = `code-block-text-${key}`;
            copyToClipboardButton.dataset.clipboardTarget = `#${element.id}`;
        });
    },
});
