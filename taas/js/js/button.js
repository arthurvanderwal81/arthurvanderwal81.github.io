class Button
{
    constructor(containerSelector, disabledClassName)
    {
        this._containerSelector = containerSelector;
        this._disabledClassName = disabledClassName;
    }

    render()
    {
        let button = document.createElement("a");
        button.href = "#";
        button.className = "";
    }
}