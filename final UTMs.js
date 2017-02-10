<script>
function getParameterByName(name, url) {
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&#]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);

	if (!results) return 'none';
	if (!results[2]) return 'none';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function createCookies() {
	var url = window.location.href;
	var ref; 

	if (!{{Referrer}}) {
		ref = "direct";    
	} else {
		ref = {{Referrer}};
	}

	var campaign = getParameterByName("utm_campaign", url);
	
  	if (getParameterByName("utm_source", url) !== "none") {
      document.cookie = "utm_source=" + getParameterByName("utm_source", url) + ";domain=.conduent.com;path=/";
    } else {
		document.cookie = "utm_source=" + ref + ";domain=.conduent.com;path=/";
    }
	document.cookie = "utm_campaign=" + campaign + ";domain=.conduent.com;path=/";
	if (ref === "https://www.google.com/" && campaign === "none") {
		document.cookie = "utm_medium=organic" + ";domain=.conduent.com;path=/";
	} else {
		document.cookie = "utm_medium=" + getParameterByName("utm_medium", url) + ";domain=.conduent.com;path=/";
	}
	document.cookie = "utm_term=" + getParameterByName("utm_term", url) + ";domain=.conduent.com;path=/";
	document.cookie = "utm_content=" + getParameterByName("utm_content", url) + ";domain=.conduent.com;path=/";
}
createCookies()
</script>