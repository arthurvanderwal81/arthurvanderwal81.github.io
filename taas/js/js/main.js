// Before document loaded to avoid styling and transition issues
(new StyleSheet("style.css")).render();
(new StyleSheet("https://fonts.googleapis.com/css2?family=Roboto&display=swap")).render();
(new StyleSheet("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap")).render();

function taasOnLoaded()
{
    let verificationCodeModal = VerificationModal.create();
    let successModal = SuccessModal.create();

    // This selector information comes from the server and is hard coded for demonstration purposes
    document.querySelector("form").addEventListener("submit", function(e) {
        e.preventDefault();

        // This selector information comes from the server and is hard coded for demonstration purposes
        TaaSAPI.sendVerificationCode(document.querySelector("[name='phone']").value);
        verificationCodeModal.show();
    });

    document.querySelector(".taas-modal a.taas-button").addEventListener("click", function(e) {
        e.preventDefault();

        if (this.hasClassName("taas-disabled"))
        {
            return;
        }

        verificationCodeModal.hide();
        successModal.show();

        setTimeout(function() {
            successModal.hide();
            console.log(document.querySelector("form"));
            document.querySelector("form").submit();
        }, 800);
    });
}

if (document.readyState === "complete")
{
    taasOnLoaded();
}
else
{
    window.addEventListener("load", taasOnLoaded);
}