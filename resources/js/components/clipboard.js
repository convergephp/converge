import ClipboardJS from "clipboard/dist/clipboard";

export default () => ({
    codeBlocks: document.querySelectorAll("pre") || [],
    clipboardIcon: `<svg class="w-5 h-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M216,34H88a6,6,0,0,0-6,6V82H40a6,6,0,0,0-6,6V216a6,6,0,0,0,6,6H168a6,6,0,0,0,6-6V174h42a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34ZM162,210H46V94H162Zm48-48H174V88a6,6,0,0,0-6-6H94V46H210Z"></path></svg>`,
    clipboardCopiedIcon: `<svg class="w-5 h-5 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path></svg>`,
    init() {
        this.codeBlocks.forEach((element, key) => {
            const wrapper = document.createElement("div");

            ["relative", "code-block-wrapper"].forEach((value) =>
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
