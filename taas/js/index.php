<?php

    // /js/?phoneNumberFieldId=phone
    // /js/?codeFieldId=code

    header("content-type: application/javascript");

    if (!isset($_GET["auth_token"]) || empty($_GET["auth_token"]))
    {
        http_response_code(401);
        echo "// Authentication failed\n";
        exit;
    }

    // TODO: support _name (instead of id) and remove from here and move to integration configuration
    // subsequently get this data from the database based off the authentication token
    if (!isset($_GET["phone_number_field_id"]) && !isset($_GET["verification_code_field_id"]))
    {
        http_response_code(400);
        echo "// Invalid parameters";
        exit;
    }

    if (isset($_GET["phone_number_field_id"]))
    {
        echo "let phoneNumberFieldId = \"$_GET[phone_number_field_id]\";\n\n";

        echo file_get_contents("js/common.js");
        echo "\n\n";
        echo file_get_contents("js/phone_number.js");
    }
    else if (isset($_GET["verification_code_field_id"]))
    {
        echo "let codeFieldId = \"$_GET[verification_code_field_id]\";\n\n";

        echo file_get_contents("js/common.js");
        echo "\n\n";
        echo file_get_contents("js/verification_code.js");
    }

?>