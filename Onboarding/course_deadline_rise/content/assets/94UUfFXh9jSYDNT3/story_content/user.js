window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  /* =========================================================
   TITANIUM DATA BRIDGE: V2.2 (STRICT VALIDATION)
   ========================================================= */

var player = GetPlayer();
var rawEmail = player.GetVar("UserEmail") || ""; // Safety fallback
var db_UserEmail = rawEmail.toString().trim();

// 🛡️ THE GUARDIAN: Strict Email Regex Pattern
// Requires: [text] @ [text] . [at least 2 letters for domain]
var strictPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

if (db_UserEmail === "") {
    // BLOCK 1: Empty input
    alert("⚠️ DATA REQUIRED: Please enter your email address to proceed.");
} 
else if (!strictPattern.test(db_UserEmail)) {
    // BLOCK 2: Malformed email
    alert("⚠️ INVALID EMAIL: '" + db_UserEmail + "' is not a valid email format. \n\nPlease use: example@domain.com");
} 
else {
    // ACCESS GRANTED: Proceed to transmission
    sendTitaniumData();
}

function sendTitaniumData() {
    var db_TrustScore = player.GetVar("TrustScore"); 
    var db_UserName = player.GetVar("System.UserName") || "Anonymous User";
    var db_Result = (db_TrustScore >= 80) ? "Master (Success)" : 
                    (db_TrustScore >= 40) ? "Good (Acceptable)" : "Fail (Critical Intervention)";

    var dataPayload = {
        "userName": db_UserName,
        "userEmail": db_UserEmail, 
        "trustScore": db_TrustScore,
        "result": db_Result
    };

    var webAppUrl = "https://script.google.com/macros/s/AKfycbxRTaltovaSZl5_d_cEIYgqVvKEg6FmCmZJOD5P2jbvOJX_kJKXkQO-G_jA9KYFeYaY/exec";

    fetch(webAppUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(dataPayload)
    })
    .then(function() {
        alert("✅ DISPATCHED: Results sent to " + db_UserEmail + ". Please check your inbox / spam folder.");
    })
    .catch(function(error) {
        alert("❌ ERROR: Data pipeline interrupted. Please check your connection.");
    });
}

}

window.Script2 = function()
{
  /* =========================================================
   TITANIUM DATA BRIDGE: STORYLINE TO GOOGLE SHEETS + EMAIL
   ========================================================= */

var player = GetPlayer();
var db_TrustScore = player.GetVar("TrustScore"); 
var db_UserEmail = player.GetVar("UserEmail"); // NEW VARIABLE
var db_UserName = player.GetVar("System.UserName") || "User";

var db_Result = "Pending";
if (db_TrustScore >= 80) {
    db_Result = "Master (Success)";
} else if (db_TrustScore >= 40) {
    db_Result = "Good (Acceptable)";
} else {
    db_Result = "Fail (Critical Intervention Required)";
}

var dataPayload = {
    "userName": db_UserName,
    "userEmail": db_UserEmail, // SENDING EMAIL
    "trustScore": db_TrustScore,
    "result": db_Result
};

var webAppUrl = "https://script.google.com/macros/s/AKfycby-yZ_9nn40WfwmBgFqyDTOi2E0U-aSPkzF7n0K3Oze1N1sm5aknmZDTOAR6VybuzXU/exec";

fetch(webAppUrl, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(dataPayload)
});

}

window.Script3 = function()
{
  /* =========================================================
   TITANIUM DATA BRIDGE: STORYLINE TO GOOGLE SHEETS + EMAIL
   ========================================================= */

var player = GetPlayer();
var db_TrustScore = player.GetVar("TrustScore"); 
var db_UserEmail = player.GetVar("UserEmail"); // NEW VARIABLE
var db_UserName = player.GetVar("System.UserName") || "User";

var db_Result = "Pending";
if (db_TrustScore >= 80) {
    db_Result = "Master (Success)";
} else if (db_TrustScore >= 40) {
    db_Result = "Good (Acceptable)";
} else {
    db_Result = "Fail (Critical Intervention Required)";
}

var dataPayload = {
    "userName": db_UserName,
    "userEmail": db_UserEmail, // SENDING EMAIL
    "trustScore": db_TrustScore,
    "result": db_Result
};

var webAppUrl = "https://script.google.com/macros/s/AKfycby-yZ_9nn40WfwmBgFqyDTOi2E0U-aSPkzF7n0K3Oze1N1sm5aknmZDTOAR6VybuzXU/exec";

fetch(webAppUrl, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(dataPayload)
});

}

};
