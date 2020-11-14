class SuccessModal extends Modal
{
    constructor(hideClassName)
    {
        super(hideClassName);
    }

    static create()
    {
        let result = super.create(new SuccessModal("taas-hidden"), "successModal");

        let modalBackground = document.querySelector(result._modalSelector);
        let modal = modalBackground.querySelector("[role='modal-dialog']");
        let modalHeader = modalBackground.querySelector("[role='modal-header']");
        let modalBody = modalBackground.querySelector("[role='modal-body']");
        let modalFooter = modalBackground.querySelector("[role='modal-footer']");

        modal.className += " taas-success";
        modalHeader.className += " taas-success";
        modalBody.className += " taas-success";
        modalFooter.className += " taas-success";

        let bodySpan = document.createElement("span");
        bodySpan.innerText = "VERIFICATION SUCCESSFUL";

        let bodyImage = document.createElement("img");
        bodyImage.src = "checkmark.png";
        bodyImage.style.margin = "20px";

        modalBody.appendChild(bodySpan);
        modalBody.appendChild(bodyImage);

        return result;
    }
}