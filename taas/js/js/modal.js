class Modal
{
    constructor(hideClassName)
    {
        this._hideClassName = hideClassName;
    }

    static fromElement(modalSelector, hideClassName, hideModalOnBackgroundClick = true)
    {
        let result = new Modal(hideClassName);

        result._modalSelector = modalSelector;

        if (hideModalOnBackgroundClick)
        {
            let modal = this;

            document.querySelector(modalSelector).addEventListener("click", function(e) {
                if (e.target == this)
                {
                    e.preventDefault();

                    result.hide();
                }
            });
        }

        return result;
    }

    static create(modalObject = null, modalId = null, hideModalOnBackgroundClick = true)
    {
        let result = modalObject != null ? modalObject : new Modal("taas-hidden");

        let modalBackgroundDiv = document.createElement("div");
        modalBackgroundDiv.id = modalId == null ? "taas-modal-" + parseInt(Math.random() * 1000000) : modalId;
        modalBackgroundDiv.className = "taas-modal-background taas-hidden";

        let modalDiv = document.createElement("div");
        modalDiv.className = "taas-modal";
        modalDiv.setAttribute("role", "modal-dialog");

        let modalHeader = document.createElement("div");
        modalHeader.className = "taas-modal-header";
        modalHeader.setAttribute("role", "modal-header");

        let modalBody = document.createElement("div");
        modalBody.className = "taas-modal-body";
        modalBody.setAttribute("role", "modal-body");

        let modalFooter = document.createElement("div");
        modalFooter.className = "taas-modal-footer";
        modalFooter.setAttribute("role", "modal-footer");

        modalBackgroundDiv.appendChild(modalDiv);
        modalDiv.appendChild(modalHeader);
        modalDiv.appendChild(modalBody);
        modalDiv.appendChild(modalFooter);

        document.body.insertBefore(modalBackgroundDiv, document.body.firstChild);

        result._modalSelector = "#" + modalBackgroundDiv.id;

        if (hideModalOnBackgroundClick)
        {
            let modal = this;

            document.querySelector(result._modalSelector).addEventListener("click", function(e) {
                if (e.target == this)
                {
                    e.preventDefault();

                    result.hide();
                }
            });
        }

        return result;
    }

    isVisible()
    {
        return document.querySelector(this._modalSelector).hasClassName(this._hideClassName);
    }

    show()
    {
        document.querySelector(this._modalSelector).removeClassName(this._hideClassName);
    }

    hide()
    {
        document.querySelector(this._modalSelector).addClassName(this._hideClassName);
    }

    toggleModal()
    {
        let modalBackground = document.querySelector(this._modalSelector);

        if (this.isVisible())
        {
            this.hided();
        }
        else
        {
            this.show();
        }
    }
}