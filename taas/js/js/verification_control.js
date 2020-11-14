class VerificationControl
{
    constructor(containerSelector, digits = null)
    {
        this._inputListeners = [];
        this._rootElement = document.querySelector(containerSelector);

        if (digits == null)
        {
            this._digits = parseInt(this._rootElement.dataset.digits);
        }
        else
        {
            this._digits = parseInt(digits);
        }
    }

    render()
    {
        let verificationControl = this;

        for (let i = 0; i < this._digits; i++)
        {
            let digitDiv = document.createElement("div");
            digitDiv.className = "taas-verification-control-digit";
            digitDiv.contentEditable = true;
            digitDiv.dataset.digitIndex = (i + 1).toString();

            digitDiv.addEventListener("input", function(e) {
                e.preventDefault();

                if (!isNaN(parseInt(e.data)))
                {
                    this.innerText = e.data;

                    if (parseInt(this.dataset.digitIndex) < parseInt(this.parentNode.dataset.digits))
                    {
                        document.querySelector("[data-digit-index='" + (parseInt(this.dataset.digitIndex) + 1) + "']").focus();
                    }
                    else
                    {
                        document.querySelector(".taas-modal a.taas-button").focus();
                    }
                }
                else
                {
                    this.innerText = this.innerText.replace(e.data, "");
                }

                let validValue = verificationControl.value.length === verificationControl._digits;

                for (let i = 0; i < verificationControl._inputListeners.length; i++)
                {
                    verificationControl._inputListeners[i](validValue, verificationControl.value);
                }
            });

            this._rootElement.appendChild(digitDiv);
        }
    }

    focus()
    {
        this._rootElement.querySelector("[data-digit-index]").focus();
    }

    resetValue()
    {
        let digitElements = this._rootElement.querySelectorAll("[data-digit-index]");

        for (let i = 0; i < digitElements.length; i++)
        {
            digitElements[i].innerText = "";
        }
    }

    get value()
    {
        let result = "";

        let digitElements = this._rootElement.querySelectorAll("[data-digit-index]");

        for (let i = 0; i < digitElements.length; i++)
        {
            result += digitElements[i].innerText;
        }

        return result;
    }

    addEventListener(eventName, listener)
    {
        if (eventName === "input")
        {
            this._inputListeners.push(listener);
        }
    }
}