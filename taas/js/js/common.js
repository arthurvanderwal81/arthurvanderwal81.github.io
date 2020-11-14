String.prototype.trimDoubleSpaces = function()
{
    return this.replace(/\s\s+/g, " ");
}

Element.prototype.hasClassName = function(className)
{
    return typeof this.className !== "undefined" && this.className != null && this.className.indexOf(className) !== -1;
};

Element.prototype.addClassName = function(className)
{
    this.removeClassName(className);
    this.className += " " + className;
};

Element.prototype.removeClassName = function(className)
{
    let classNameRegex = new RegExp(className, "gi");

    this.className = this.className.replace(classNameRegex, "").trim().trimDoubleSpaces();
};

// https://stackoverflow.com/questions/1118198/how-can-you-figure-out-the-highest-z-index-in-your-document
function findHighestZIndex()
{
    let elements = document.querySelectorAll("*");
    let maxZIndex = Number.MIN_SAFE_INTEGER || -(Math.pow(2, 53) - 1);

    for (let i = 0; i < elements.length; i++)
    {
        let zIndexPropertyValue = document.defaultView.getComputedStyle(elements[i], null).getPropertyValue("z-index");
        let zIndex = Number.parseInt(zIndexPropertyValue, 10);

        if (isNaN(zIndex))
        {
            continue;
        }

        maxZIndex = Math.max(zIndex, maxZIndex);
    }

    return maxZIndex;
}

function findMainForm()
{
    let forms = document.querySelectorAll("form");

    if (forms.length == 1)
    {
        return forms[0];
    }

    for (let i = 0; i < forms.length; i++)
    {
        console.log(forms[i].id);
        console.log(forms[i].querySelector("input[type='submit']"));

        if (forms[i].id.indexOf("gform_") === 0)
        {
            return forms[i];
        }
    }

    return null;
}

function findMainFormAlt()
{
    let field = document.querySelector("#" + phoneNumberFieldId ?? codeFieldId);
    form = field.form;

    return form;
}

/*
if in place form
configure next button
hook next button
check if configured phone number element is visible by checking offsetParent is not null
if not null, trigger flow



if in place form
configure final submit button
*/