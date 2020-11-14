function hookSubmitVerify(form)
{
    form.addEventListener("submit", function(e) {
        console.log("form submitting");
        //console.log(e);
        //e.preventDefault();
    });

    form.querySelector("input[type='submit']").addEventListener("click", function(e) {
        console.log("click");
        e.preventDefault();

        let code = "code123";

        fetch("https://admin.priceblox.com//v/?code=" + code, { "method": "GET", "credentials": "include" })
        .then(response => response.json())
        .then(json => {
            console.log(json);

            if (json.success)
            {
                console.log("Code correct");
                //form.submit();
            }
            else
            {
                console.log("Code incorrect");
            }
        });
    });
}

if (document.readyState === "complete")
{
    hookSubmitVerify(findMainForm());
}
else
{
    window.addEventListener("load", function() {
        hookSubmitVerify(findMainForm());
    });
}