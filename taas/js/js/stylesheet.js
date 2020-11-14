class StyleSheet
{
    constructor(url)
    {
        this._url = url;
    }

    render()
    {
        let styleSheetElement = document.createElement("link");

        styleSheetElement.href = this._url;
        styleSheetElement.rel = "stylesheet";

        document.head.insertBefore(styleSheetElement, document.head.firstChild);
    }
}