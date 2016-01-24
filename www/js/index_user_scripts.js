/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
    window.globalVar = "This is global!";
    
    
 function register_event_handlers()
 {
    
     
     /* button  #TOC_Button */
    $(document).on("click", "#TOC_Button", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#TOC"); 
       
        
    });
    
        /* listitem  Drugs */
    
    
        /* listitem  Triage */
    
    
        /* button  Proceed */
    
    
        /* button  Proceed */
    $(document).on("click", ".uib_w_23", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_10_1"); 
    });
    
        /* listitem  Adrenaline */

    $(document).on("click", ".uib_w_19", function(evt)
    {
        globalVar = $( this ).id();
         /*global activate_subpage */
         activate_subpage("#Drugs2"); 
    });
    
        /* listitem  Albendazole */
    $(document).on("click", ".uib_w_20", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#Drugs2"); 
    });
    
        /* listitem  Amikacin */
    $(document).on("click", ".uib_w_21", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#Drugs2"); 
    });
    
       
        /* listitem  Triage */
    $(document).on("click", ".uib_w_9", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#Triage"); 
    });
    
     
        /* listitem  .uib_w_8 */
    
    
        /* listitem  Drugs */
    
    
        /* listitem  Basic life support */
    
    
        /* listitem  .uib_w_8 */
    
    
        /* listitem  Drugs */
    $(document).on("click", ".uib_w_8", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#Drugs1"); 
    });
    
        /* listitem  Basic life support */
    $(document).on("click", ".uib_w_811", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#bls"); 
    });
    
        /* listitem  .uib_w_812 */
    $(document).on("click", ".uib_w_812", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#childWithLifeSigns"); 
    });
    
        /* listitem  Resuscitation */
    $(document).on("click", ".uib_w_813", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#neoResuscitation"); 
    });
    
        /* listitem  Sepsis */
    $(document).on("click", ".uib_w_814", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#neoSepsis"); 
    });
    
        /* listitem  Jaundice */
    $(document).on("click", ".uib_w_815", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#neoJaundice"); 
    });
    
        /* listitem  Maintenance fluids */
    $(document).on("click", ".uib_w_817", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#maintenanceFluids"); 
    });
    
        /* listitem  Neonatal */
    $(document).on("click", ".uib_w_816", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#neoFeedFluids"); 
    });
    
        /* listitem  Asthma */
    $(document).on("click", ".uib_w_818", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#asthma"); 
    });
    
        /* listitem  Convulsions */
    $(document).on("click", ".uib_w_819", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#convulsions"); 
    });
    
        /* listitem  Diarrhoea/Dehydration */
    $(document).on("click", ".uib_w_820", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#diarrhoea"); 
    });
    
        /* listitem  PITC */
    $(document).on("click", ".uib_w_822", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#PITC"); 
    });
    
        /* listitem  Management */
    $(document).on("click", ".uib_w_823", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#hivMgt"); 
    });
    
        /* listitem  .uib_w_824 */
    $(document).on("click", ".uib_w_824", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#pmtct"); 
    });
    
        /* listitem  Malaria */
    $(document).on("click", ".uib_w_825", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#malaria"); 
    });
    
        /* listitem  MUAC */
    $(document).on("click", ".uib_w_827", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#muac"); 
    });
    
        /* listitem  10 Steps */
    $(document).on("click", ".uib_w_828", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#steps"); 
    });
    
        /* listitem  Fluid Management */
    $(document).on("click", ".uib_w_829", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#mlnFluidMgt"); 
    });
    
        /* listitem  Feeding */
    $(document).on("click", ".uib_w_830", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#mlnFeeds"); 
    });
    
        /* listitem  Meningitis */
    $(document).on("click", ".uib_w_831", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#meningitis"); 
    });
    
        /* listitem  Treatment flowchart */
    $(document).on("click", ".uib_w_833", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#pneuTrFlow"); 
    });
    
        /* listitem  .uib_w_834 */
    $(document).on("click", ".uib_w_834", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#pneuTrFail"); 
    });
    
        /* listitem  Diagnostic algorithm */
    $(document).on("click", ".uib_w_838", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#ptbDxAlg"); 
    });
    
        /* listitem  Treatment regimens */
    $(document).on("click", ".uib_w_839", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#tbRegimens"); 
    });
    
        /* listitem  Procedures */
    $(document).on("click", ".uib_w_14", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#procedures"); 
    });
    
        /* listitem  Weight estimation */
    $(document).on("click", ".uib_w_836", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#wtEst"); 
    });
    
        /* listitem  Weight for Height Tables */
    $(document).on("click", ".uib_w_837", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#wfh"); 
    });
     
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();


