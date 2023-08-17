var images_data;
var images_array = [];

var images_data_loading;
var images_array_loading = [];

function parse_images(item) {
    images_array[item.name] = item.data;
}

function parse_images_loading(item) {
    images_array_loading[item.name] = item.data;
}



var xhttp = new XMLHttpRequest();
xhttp.onload = function() {
	if (this.readyState === 4) 
	{
		
		if (this.status === 200) {
			try
			{
				images_data = JSON.parse(this.response);
				images_data.forEach(parse_images);
				check_and_load_c2_runtime(0);
			}catch(e)
			{
				
			}
		} else {
			
		}
    }
};

var xhttp2 = new XMLHttpRequest();
xhttp2.onload = function() {
	if (this.readyState === 4) 
	{
		
		if (this.status === 200) {
			try
			{
				images_data = JSON.parse(this.response);
				images_data.forEach(parse_images);
				check_and_load_c2_runtime(0);
			}catch(e)
			{
				
			}
		} else {
			
		}
    }	
};

var xhttp3 = new XMLHttpRequest();
xhttp3.onload = function() {
	if (this.readyState === 4) 
	{
		
		if (this.status === 200) {
			try
			{
				images_data = JSON.parse(this.response);
				images_data.forEach(parse_images);
				check_and_load_c2_runtime(0);
			}catch(e)
			{
				
			}
		} else {
			
		}
    }
	// xhttp4.open("GET", "images4.json", true);
	// xhttp4.send();
};

var xhttp4 = new XMLHttpRequest();
xhttp4.onload = function() {
	if (this.readyState === 4) 
	{
		
		if (this.status === 200) {
			try
			{
				images_data = JSON.parse(this.response);
				images_data.forEach(parse_images);
				check_and_load_c2_runtime(0);
				
			}catch(e)
			{
			}
		} else {
			
		}
    }
	
	
};

var xhttp5 = new XMLHttpRequest();
xhttp5.onload = function() {
	if (this.readyState === 4) 
	{
		
		if (this.status === 200) {
			try
			{
				images_data = JSON.parse(this.response);
				images_data.forEach(parse_images);
				check_and_load_c2_runtime(0);
				
			}catch(e)
			{
			}
		} else {
			
		}
    }
	
	
};

var xhttp6 = new XMLHttpRequest();
xhttp6.onload = function() {
	if (this.readyState === 4) 
	{
		
		if (this.status === 200) {
			try
			{
				images_data = JSON.parse(this.response);
				images_data.forEach(parse_images);
				check_and_load_c2_runtime(0);
				
			}catch(e)
			{
			}
		} else {
			
		}
    }
	
	
};

var xhttp7 = new XMLHttpRequest();
xhttp7.onload = function() {
	if (this.readyState === 4) 
	{		
		if (this.status === 200) {
			try
			{
				images_data = JSON.parse(this.response);
				images_data.forEach(parse_images);
				check_and_load_c2_runtime(0);				
			}catch(e)
			{
			}
		} else {			
		}
    }	
};

var xhttp8 = new XMLHttpRequest();
xhttp8.onload = function() {
	if (this.readyState === 4) 
	{		
		if (this.status === 200) {
			try
			{
				images_data = JSON.parse(this.response);
				images_data.forEach(parse_images);
				check_and_load_c2_runtime(0);				
			}catch(e)
			{
			}
		} else {			
		}
    }	
};

var xhttp9 = new XMLHttpRequest();
xhttp9.onload = function() {
	if (this.readyState === 4) 
	{		
		if (this.status === 200) {
			try
			{
				images_data = JSON.parse(this.response);
				images_data.forEach(parse_images);
				check_and_load_c2_runtime(0);				
			}catch(e)
			{
			}
		} else {			
		}
    }	
};

var xhttp_loading = new XMLHttpRequest();
xhttp_loading.onload = function() {
	if (this.readyState === 4) 
	{
		
		if (this.status === 200) {
			try
			{
				images_data_loading = JSON.parse(this.response);
				images_data_loading.forEach(parse_images_loading);
				check_and_load_c2_runtime(1);
			}catch(e)
			{
				
			}
		} else {	
		}
		
    }

};

xhttp_loading.open("GET", "images_loading.json", true);
xhttp_loading.send();

// xhttp.open("GET", "images1.json", true);
// xhttp.send();

// xhttp2.open("GET", "images2.json", true);
// xhttp2.send();

// xhttp3.open("GET", "images3.json", true);
// xhttp3.send();

// xhttp4.open("GET", "images4.json", true);
// xhttp4.send();

// xhttp5.open("GET", "images5.json", true);
// xhttp5.send();

// xhttp6.open("GET", "images6.json", true);
// xhttp6.send();

// xhttp7.open("GET", "images7.json", true);
// xhttp7.send();

// xhttp8.open("GET", "images8.json", true);
// xhttp8.send();

// xhttp9.open("GET", "images9.json", true);
// xhttp9.send();

check_and_load_c2_runtime = function (loadingScreenLoaded) {
	n_preload += 1;
	if (loadingScreenLoaded == 1) 
	{
		image_loading_loaded = 1;
		if (dataLoading_delayTime != 0)
		{		
			setTimeout(function () {
				console.log('load_all_json was delayed: ' + dataLoading_delayTime);
				load_all_json();
			}, dataLoading_delayTime);			
		}
		else
		{
			load_all_json();
		}
	}
	
}
load_all_json = function () {
	xhttp.open("GET", "images1.json", true);
	xhttp.send();

	xhttp2.open("GET", "images2.json", true);
	xhttp2.send();

	xhttp3.open("GET", "images3.json", true);
	xhttp3.send();

	xhttp4.open("GET", "images4.json", true);
	xhttp4.send();
}
Image = (function(org) {
    return function() {
        var result = new org;
        Object.defineProperty(result, 'src', {
            set: function(srcAttr) {
                result.setAttribute('_src', srcAttr);
                // console.log(srcAttr);
                if (images_array[srcAttr] != null) {
                    result.setAttribute('src', 'data:image/png;base64,' + images_array[srcAttr]);
                } else if (images_array_loading[srcAttr] != null){
					//console.log("000000000000 loading pack");
					result.setAttribute('src', 'data:image/png;base64,' + images_array_loading[srcAttr]);
				}else {
                    result.setAttribute('src', srcAttr);
                }
            },
            get: function() {
                return result.getAttribute('_src');
            }
        });
        return result;
    };
}(Image));