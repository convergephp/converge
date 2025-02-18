export default ({ lightMode = null, darkMode = null }) => ({
    lightMode: lightMode,
    darkMode: darkMode,
    init(){
        console.log(darkMode);
        console.log(lightMode);
    }
});
