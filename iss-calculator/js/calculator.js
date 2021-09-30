function calculate(zipcode, billSize, useTime)
{
    let result = {
        "rebate": 0.0,
        "savings": 0.0,
    };

    let level = -1;

    if (billSize >= 0.0 && billSize <= 300.0)
    {
        level = 1;
    }
    else if (billSize > 300 && billSize <= 600)
    {
        level = 2;
    }
    else if (billSize > 600 && billSize <= 900)
    {
        level = 3;
    }
    else if (billSize > 900)
    {
        level = 4;
    }

    let usePercent = -1.0;

    switch (useTime)
    {
        case "day":
            usePercent = 0.7;
            break;
        case "night":
            usePercent = 0.3;
            break;
        case "day-and-night":
            usePercent = 0.5;
            break;
    }

    let tarrif = 0.0;

    // QLD
    if (zipcode[0] == "4")
    {
        switch (level)
        {
            case 1:
                tarrif = 3085;
                result.rebate = 1760;
                break;
            case 2:
                tarrif = 4010;
                result.rebate = 2290;
                break;
            case 3:
                tarrif = 5860;
                result.rebate = 3350;
                break;
            case 4:
                tarrif = 8635;
                result.rebate = 4935;
                break;
        }
    }
    else
    {
        switch (level)
        {
            case 1:
                tarrif = 2865;
                result.rebate = 1635;
                break;
            case 2:
                tarrif = 3720;
                result.rebate = 2125;
                break;
            case 3:
                tarrif = 5725;
                result.rebate = 3270;
                break;
            case 4:
                tarrif = 8590;
                result.rebate = 4910;
                break;
        }
    }

    let systemSize = parseInt(billSize) / 100.0;
    let dailyProduction = systemSize * 10.0;

    // TODO: these should be averages
    let customerTarrif = .47;
    let customerFeedInTarrif = .9;

    result.savings = (dailyProduction * usePercent * customerTarrif) + (dailyProduction * (1 - usePercent) * customerFeedInTarrif);

    return result;
}