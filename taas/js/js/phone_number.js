/* this will all happen on the page the phone number is inputed, so no need for cookies */
/*
Window location check with encoded string in JavaScript

Throttle requests from same IP

Check user agent

Check referer

When fetch for send and verify code, check referrer

Random obfuscate
*/

function hookSubmitPhoneNumber(form)
{
    form.addEventListener("submit", function(e) {
        console.log("form submitting");
    });

    form.querySelector("input[type='submit']").addEventListener("click", function(e) {
        e.preventDefault();

        fetch("https://admin.priceblox.com/v/", { "method": "POST", "credentials": "include" })
        .then(response => {
            console.log(response);

            form.submit();
        });
    });
}

if (document.readyState === "complete")
{
    hookSubmitPhoneNumber(findMainForm());
}
else
{
    window.addEventListener("load", function() {
        hookSubmitPhoneNumber(findMainForm());
    });
}