class VerificationModal extends Modal
{
    constructor(hideClassName)
    {
        super(hideClassName);
    }

    static create()
    {
        let result = super.create(new VerificationModal("taas-hidden"), "verificationModal");

        let modalBackground = document.querySelector(result._modalSelector);
        let modalHeader = modalBackground.querySelector("[role='modal-header']");
        let modalBody = modalBackground.querySelector("[role='modal-body']");
        let modalFooter = modalBackground.querySelector("[role='modal-footer']");

        modalHeader.innerText = "CONFIRM YOUR NUMBER";

        let bodySpan = document.createElement("span");
        bodySpan.innerText = "Enter your verification code";

        let verificationControlContainer = document.createElement("div");
        verificationControlContainer.id = "verification-control";
        verificationControlContainer.className = "taas-verification-control";
        verificationControlContainer.dataset.digits = "4";

        modalBody.appendChild(bodySpan);
        modalBody.appendChild(verificationControlContainer);

        let confirmButton = document.createElement("a");
        confirmButton.id = "confirmButton";
        confirmButton.href = "#";
        confirmButton.className = "taas-button taas-disabled";
        confirmButton.innerText = "CONFIRM NUMBER";

        modalFooter.appendChild(confirmButton);

        result._verificationControl = new VerificationControl("#verification-control");
        result._verificationControl.render();

        result._verificationControl.addEventListener("input", function(valid, value) {
            console.log("Input event", valid, value);

            if (valid)
            {
                modalFooter.querySelector("#confirmButton").removeClassName("taas-disabled");
            }
            else
            {
                modalFooter.querySelector("#confirmButton").addClassName("taas-disabled");
            }
        });

        return result;
    }

    show()
    {
        this._verificationControl.resetValue();
        super.show();
        this._verificationControl.focus();
    }
}