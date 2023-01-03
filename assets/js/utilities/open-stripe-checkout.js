parasails.registerUtility("openStripeCheckout",(async function(stripePublishableKey,billingEmailAddress,headingText,descriptionText,buttonText){var CACHE_KEY="_cachedStripeCheckoutHandler";window[CACHE_KEY]||(window[CACHE_KEY]=StripeCheckout.configure({key:stripePublishableKey}));var hasTriggeredTokenCallback,checkoutHandler=window[CACHE_KEY];return new Promise(((resolve,reject)=>{try{checkoutHandler.open({name:headingText||"NEW_APP_NAME",description:descriptionText||"Link your credit card.",panelLabel:buttonText||"Save card",email:billingEmailAddress,locale:"auto",zipCode:!1,allowRememberMe:!1,closed:()=>{hasTriggeredTokenCallback||resolve()},token:stripeData=>{hasTriggeredTokenCallback=!0;let stripeToken=stripeData.id,billingCardLast4=stripeData.card.last4,billingCardBrand=stripeData.card.brand,billingCardExpMonth=String(stripeData.card.exp_month),billingCardExpYear=String(stripeData.card.exp_year);resolve({stripeToken:stripeToken,billingCardLast4:billingCardLast4,billingCardBrand:billingCardBrand,billingCardExpMonth:billingCardExpMonth,billingCardExpYear:billingCardExpYear})}})}catch(err){reject(err)}}))}));