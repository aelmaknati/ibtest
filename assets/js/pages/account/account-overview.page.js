parasails.registerPage("account-overview",{data:{isBillingEnabled:!1,hasBillingCard:!1,syncingOpenCheckout:!1,syncingUpdateCard:!1,syncingRemoveCard:!1,formData:{},formRules:{},formErrors:{},cloudError:"",syncing:"",modal:""},beforeMount:function(){_.extend(this,window.SAILS_LOCALS),this.isBillingEnabled=!!this.stripePublishableKey,this.me.hasBillingCard=this.me.billingCardBrand&&this.me.billingCardLast4&&this.me.billingCardExpMonth&&this.me.billingCardExpYear},mounted:async function(){},methods:{clickUpdateBillingCardButton:function(){this.modal="update-billing-card",this.formData={newPaymentSource:void 0},this.formRules={newPaymentSource:{required:!0}}},closeModal:async function(){this.modal="",await this._resetForms()},handleSubmittingUpdateBillingCard:async function(argins){var newPaymentSource=argins.newPaymentSource;await Cloud.updateBillingCard.with(newPaymentSource)},submittedUpdateBillingCard:async function(){Object.assign(this.me,_.pick(this.formData.newPaymentSource,["billingCardLast4","billingCardBrand","billingCardExpMonth","billingCardExpYear"])),this.me.hasBillingCard=!0,this.modal="",await this._resetForms()},_resetForms:async function(){this.cloudError="",this.formData={},this.formRules={},this.formErrors={},await this.forceRender()},clickRemoveCardButton:async function(){this.modal="remove-billing-card",this.formData.stripeToken=""},submittedRemoveCardForm:async function(){this.me.billingCardLast4=void 0,this.me.billingCardBrand=void 0,this.me.billingCardExpMonth=void 0,this.me.billingCardExpYear=void 0,this.me.hasBillingCard=!1,this.closeModal()}}});