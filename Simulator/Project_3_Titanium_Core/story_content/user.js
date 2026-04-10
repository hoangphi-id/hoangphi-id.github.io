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
   TITANIUM DATA BRIDGE: FINAL PRODUCTION VERSION (V2.3)
   NEW LINK: AKfycbzepiBeT4X_R9urOhRc0Sr4Cqw4lOVMTKEbkYYPzts...
   ========================================================= */

// 1. Initialize Player and Process User Input
var player = GetPlayer();
var rawEmail = player.GetVar("UserEmail") || ""; 
var db_UserEmail = rawEmail.toString().trim();

// 2. STRICT VALIDATION GATEKEEPER
// Ensures data integrity before transmission
var strictEmailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

if (db_UserEmail === "") {
    // Error Case A: Empty Input
    alert("⚠️ INPUT REQUIRED: Please enter your email address to receive the performance report.");
} 
else if (!strictEmailPattern.test(db_UserEmail)) {
    // Error Case B: Invalid Format
    alert("⚠️ INVALID FORMAT: '" + db_UserEmail + "' is not a valid email address. \n\nPlease check for typos.");
} 
else {
    // Access Granted: Execute Transmission
    executeTitaniumTransfer();
}

function executeTitaniumTransfer() {
    var db_TrustScore = player.GetVar("TrustScore"); 
    var db_UserName = player.GetVar("System.UserName") || "Anonymous User";
    
    // Dynamically calculate result group for backend logging
    var db_Result = (db_TrustScore >= 80) ? "Master (Success)" : 
                    (db_TrustScore >= 40) ? "Good (Acceptable)" : "Fail (Critical Intervention Required)";

    var dataPayload = {
        "userName": db_UserName,
        "userEmail": db_UserEmail, 
        "trustScore": db_TrustScore,
        "result": db_Result
    };

    // YOUR LATEST GOOGLE WEB APP URL
    var webAppUrl = "https://script.google.com/macros/s/AKfycbzepiBeT4X_R9urOhRc0Sr4Cqw4lOVMTKEbkYYPztsHlzUoUEEjFqD9syDftWPJBi4v/exec";

    // Transmission using Fetch API
    fetch(webAppUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(dataPayload)
    })
    .then(function() {
        // Success Notification
        alert("✅ DISPATCHED: Your report has been successfully calculated and transmitted to: " + db_UserEmail);
    })
    .catch(function(error) {
        // Fallback Error Handling
        alert("❌ PIPELINE ERROR: Connection failed. Please check your network and try again.");
    });
}

}

window.Script2 = function()
{
  /* =========================================================
   TITANIUM DATA BRIDGE: FINAL PRODUCTION VERSION (V2.3)
   NEW LINK: AKfycbzepiBeT4X_R9urOhRc0Sr4Cqw4lOVMTKEbkYYPzts...
   ========================================================= */

// 1. Initialize Player and Process User Input
var player = GetPlayer();
var rawEmail = player.GetVar("UserEmail") || ""; 
var db_UserEmail = rawEmail.toString().trim();

// 2. STRICT VALIDATION GATEKEEPER
// Ensures data integrity before transmission
var strictEmailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

if (db_UserEmail === "") {
    // Error Case A: Empty Input
    alert("⚠️ INPUT REQUIRED: Please enter your email address to receive the performance report.");
} 
else if (!strictEmailPattern.test(db_UserEmail)) {
    // Error Case B: Invalid Format
    alert("⚠️ INVALID FORMAT: '" + db_UserEmail + "' is not a valid email address. \n\nPlease check for typos.");
} 
else {
    // Access Granted: Execute Transmission
    executeTitaniumTransfer();
}

function executeTitaniumTransfer() {
    var db_TrustScore = player.GetVar("TrustScore"); 
    var db_UserName = player.GetVar("System.UserName") || "Anonymous User";
    
    // Dynamically calculate result group for backend logging
    var db_Result = (db_TrustScore >= 80) ? "Master (Success)" : 
                    (db_TrustScore >= 40) ? "Good (Acceptable)" : "Fail (Critical Intervention Required)";

    var dataPayload = {
        "userName": db_UserName,
        "userEmail": db_UserEmail, 
        "trustScore": db_TrustScore,
        "result": db_Result
    };

    // YOUR LATEST GOOGLE WEB APP URL
    var webAppUrl = "https://script.google.com/macros/s/AKfycbzepiBeT4X_R9urOhRc0Sr4Cqw4lOVMTKEbkYYPztsHlzUoUEEjFqD9syDftWPJBi4v/exec";

    // Transmission using Fetch API
    fetch(webAppUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(dataPayload)
    })
    .then(function() {
        // Success Notification
        alert("✅ DISPATCHED: Your report has been successfully calculated and transmitted to: " + db_UserEmail);
    })
    .catch(function(error) {
        // Fallback Error Handling
        alert("❌ PIPELINE ERROR: Connection failed. Please check your network and try again.");
    });
}

}

window.Script3 = function()
{
  /* =========================================================
   TITANIUM DATA BRIDGE: FINAL PRODUCTION VERSION (V2.3)
   NEW LINK: AKfycbzepiBeT4X_R9urOhRc0Sr4Cqw4lOVMTKEbkYYPzts...
   ========================================================= */

// 1. Initialize Player and Process User Input
var player = GetPlayer();
var rawEmail = player.GetVar("UserEmail") || ""; 
var db_UserEmail = rawEmail.toString().trim();

// 2. STRICT VALIDATION GATEKEEPER
// Ensures data integrity before transmission
var strictEmailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

if (db_UserEmail === "") {
    // Error Case A: Empty Input
    alert("⚠️ INPUT REQUIRED: Please enter your email address to receive the performance report.");
} 
else if (!strictEmailPattern.test(db_UserEmail)) {
    // Error Case B: Invalid Format
    alert("⚠️ INVALID FORMAT: '" + db_UserEmail + "' is not a valid email address. \n\nPlease check for typos.");
} 
else {
    // Access Granted: Execute Transmission
    executeTitaniumTransfer();
}

function executeTitaniumTransfer() {
    var db_TrustScore = player.GetVar("TrustScore"); 
    var db_UserName = player.GetVar("System.UserName") || "Anonymous User";
    
    // Dynamically calculate result group for backend logging
    var db_Result = (db_TrustScore >= 80) ? "Master (Success)" : 
                    (db_TrustScore >= 40) ? "Good (Acceptable)" : "Fail (Critical Intervention Required)";

    var dataPayload = {
        "userName": db_UserName,
        "userEmail": db_UserEmail, 
        "trustScore": db_TrustScore,
        "result": db_Result
    };

    // YOUR LATEST GOOGLE WEB APP URL
    var webAppUrl = "https://script.google.com/macros/s/AKfycbzepiBeT4X_R9urOhRc0Sr4Cqw4lOVMTKEbkYYPztsHlzUoUEEjFqD9syDftWPJBi4v/exec";

    // Transmission using Fetch API
    fetch(webAppUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(dataPayload)
    })
    .then(function() {
        // Success Notification
        alert("✅ DISPATCHED: Your report has been successfully calculated and transmitted to: " + db_UserEmail);
    })
    .catch(function(error) {
        // Fallback Error Handling
        alert("❌ PIPELINE ERROR: Connection failed. Please check your network and try again.");
    });
}

}

};
