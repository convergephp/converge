export default () => ({
    svg: `<div class="w-7 h-7 absolute top-0 -left-7 hidden group-hover:flex rounded-md  items-center justify-center shadow-sm text-base-content transition-opacity duration-200 ring-1 hover:brightness-150 ring-base-300" style="margin-right:2px;"><svg xmlns="http://www.w3.org/2000/svg" fill="gray" height="12px" viewBox="0 0 576 512"><path d="M0 256C0 167.6 71.6 96 160 96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C98.1 144 48 194.1 48 256s50.1 112 112 112h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c61.9 0 112-50.1 112-112s-50.1-112-112-112H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c88.4 0 160 71.6 160 160zM184 232H392c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path></svg></div>`,
    init() {
        const contentDiv = document.querySelector(".prose.content");
        const headings = contentDiv.querySelectorAll("h1, h2, h3, h4, h5, h6");

        headings.forEach((heading) => {
            
            let anchor = heading.querySelector("a");

            heading.classList.add('group','relative','cursor-pointer')

            heading.addEventListener('click',() => anchor.click())
            
            anchor.innerHTML = this.svg ;
        });
    },
});
