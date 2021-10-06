class FacebookAPI
{
    // https://developers.facebook.com/docs/marketing-api/reference/ad-campaign-group/#fields
    static campaignFields = ["id", "account_id", "ad_strategy_id", "adlabels", "bid_strategy", "boosted_object_id", "brand_lift_studies", "budget_rebalance_flag", "budget_remaining", "buying_type", "can_create_brand_lift_study", "can_use_spend_cap", "configured_status", "created_time", "daily_budget", "effective_status", "is_skadnetwork_attribution", "issues_info", "last_budget_toggling_time", "lifetime_budget", "name", "objective", "pacing_type", "promoted_object", "recommendations", "smart_promotion_type", "source_campaign", "source_campaign_id", "special_ad_categories", "special_ad_category", "special_ad_category_country", "spend_cap", "start_time", "status", "stop_time", "topline_id", "updated_time"];

    constructor()
    {
    }

    getCampaigns(adAccountId)
    {
        return new Promise((resolve, reject) => {
            FB.api(`/v12.0/${adAccountId}/campaigns/?fields=${Facebook.campaignFields.join(",")}`, function(campaigns) {
                console.log(campaigns);

                resolve(campaigns.data);
            });
        });
    }

    getAdAccounts(userID)
    {
        return new Promise((resolve, reject) => {
            FB.api(`/v12.0/${userID}/adaccounts/?fields=id,account_id,name`, function(adAccounts) {
                console.log(response);

                resolve(adAccounts.data);
            });
        });
    }
}